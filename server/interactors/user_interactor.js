const User = require('../models/user');
const bcrypt = require('bcryptjs');

const {buildToken} = require('./utils/jwt_interactor');


const getByCredentials = ({email, password}, res) =>{

    User.findOne({ email: email, IsActive: true }, (err, entity) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!entity) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o contraseña incorrectos.'
                }
            });
        }

        if (!bcrypt.compareSync(password, entity.password)) {
            return res.status(400).json({
                ok: false,
                err: {
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
    getByCredentials
}