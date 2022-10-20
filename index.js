const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const users = require('./routes/users')

app.use(cors());
app.use(bodyParser.json())

const PORT = 3000;

app.use('/users', users)
app.get('/', (req, res) => {
    res.send('Welcome to app')
})

app.listen(PORT, () => console.log('app started'))