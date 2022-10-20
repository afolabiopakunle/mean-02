const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.send('Welcome users REGISTER')
})

router.get('/auth', (req, res) => {
    res.send('Welcome users AUTH')
})

router.get('/profile', (req, res) => {
    res.send('Welcome users PROFILE')
})

router.get('/validate', (req, res) => {
    res.send('Welcome users VALIDATE')
})

module.exports = router;