const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let story = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'Usuario creador requerido.']
    },
    image: {
        type: String,
        required: [true, 'Se requiere una imagen.']
    },
    description: {
        type: String
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Commentary",
        required: true
    }],
    isActive: {
        type: Boolean,
        default: true
    }
})

story.plugin(uniqueValidator, {
    message: '{PATH}'
})

module.exports = mongoose.model('Story', story);