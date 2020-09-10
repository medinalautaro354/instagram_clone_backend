const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let user = new Schema({
    email: {
        type: String,
        required: [true, 'El email es requerido.'],
        unique: [true, 'El email ya se encuentra registrado.']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida.']
    },
    profilePicture: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

user.add({
    followed: [user],
    followers: [user]
})

user.methods.toJSON = function () {

    let user = this;
    let entity = user.toObject();
    delete entity.password;

    return entity;
}

user.plugin(uniqueValidator, {
    message: '{PATH} debe ser unico'
})

module.exports = mongoose.model('User', user);