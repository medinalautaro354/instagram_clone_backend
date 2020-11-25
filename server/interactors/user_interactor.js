const User = require('../models/user');
const bcrypt = require('bcryptjs');

const {buildToken} = require('./utils/jwt_interactor');


const getByCredentials = async ({email, password}, res) =>{

    email = email.toLowerCase()

    await User.findOne({ email: email, isActive: true }, (error, entity) => {
        if (error) {
            return res.status(500).json({
                ok: false,
                error
            });
        }

        if (!entity) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'Usuario o contraseña incorrectos.'
                }
            });
        }

        if (!bcrypt.compareSync(password, entity.password)) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'Usuario o contraseña incorrectos.'
                }
            });
        }

        let token = buildToken(entity);

        res.json({
            ok: true,
            user: entity,
            token
        })
    });
}



module.exports = {
    getByCredentials,
}