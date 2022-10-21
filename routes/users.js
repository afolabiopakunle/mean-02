const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

router.post('/register', (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, message: 'Failed to register user'})
        } else {
            res.json({success: true, message: 'User registered'})
        }
    })
})

router.post('/auth', (req, res) => {
    res.send('Welcome users AUTH')
})

router.get('/profile', (req, res) => {
    res.send('Welcome users PROFILE')
})

module.exports = router;