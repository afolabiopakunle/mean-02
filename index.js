const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config/database');

const app = express();

const users = require('./routes/users')

mongoose.connect(config.database);

mongoose.connection.on('connected', () => console.log('DB is now connected to ' + config.database, ));
mongoose.connection.on('error', (ERROR) => console.log('DB ERROR', ERROR));

app.use(cors());
app.use(bodyParser.json())

const PORT = 3000;

app.use('/users', users)
app.get('/', (req, res) => {
    res.send('Welcome to app')
})

app.listen(PORT, () => console.log('app started'))