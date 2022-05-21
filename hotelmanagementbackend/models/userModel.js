const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxlength: 15
    },
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 15
    },
    email: {
        type: String,
        required: true
    },
    cnumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)