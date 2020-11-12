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

const getRandomUsers = () =>{
    let numbers = []

    User.find({isActive: true}, (error, entities) =>{
        if (error) {
            return res.status(500).json({
                ok: false,
                error
            });
        }

        if(entities.length > 0){
            for (let i = 0; i < 4; i++) {
        
                let random = getRandomNumber(entities.length);
                
                numbers.push(random)
            }

            return res.json({
                ok: true,
                entities: entites[numbers]
            })
        }

        return res.json({
            ok: true,
            entities: []
        })
    })


    
}

const getRandomNumber = (number) =>{
    return Math.floor(Math.random() * number);
}

module.exports = {
    getByCredentials
}