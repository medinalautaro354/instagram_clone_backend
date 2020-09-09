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
    }
})

module.exports = mongoose.model('Commentary', commentary);