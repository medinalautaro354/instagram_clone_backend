const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let commentary = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    paragraph: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    likes:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ]
})

commentary.add({
    comentaries: [commentary]
})

module.exports = mongoose.model('Commentary', commentary);