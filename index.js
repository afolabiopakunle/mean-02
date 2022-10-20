const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();


const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to app')
})

app.listen(PORT, () => console.log('app started'))