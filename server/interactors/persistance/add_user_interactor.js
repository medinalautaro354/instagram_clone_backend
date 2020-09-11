const bcrypt = require('bcryptjs');

const {buildToken} = require('../utils/jwt_interactor');
const User = require('../../models/user');

const add = ({email, password}, res) => {

    let user = new User({
        email:email,
        password: bcrypt.hashSync(password, 10),
        username: email.split('@')[0]
    });

    user.save((error, entity) =>{
        if(error){
            return res.status(400).json({
                ok: false,
                error
            });
        }

        let token = buildToken(entity);

        return res.json({
            ok: true,
            user: entity,
            token
        });
    })
}

module.exports = {
    add
}