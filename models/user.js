const mongoose = require('mongoose');
const bcyrpt = require('bcryptjs');

const config = require('../config/database');

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    }
})

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback)
}

module.exports.getUserByUsername = function(username, callback) {
    let query = {username}
    User.findOne(query, callback )
}

module.exports.addUser = function(newUser, callback) {
    bcyrpt.genSalt(10, (err, salt) => {
        bcyrpt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err
            newUser.password = hash
            newUser.save(callback)
        })
    })
}