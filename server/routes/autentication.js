const express = require('express')
const app = express()

const { add } = require('../interactors/persistance/add_user_interactor');
const { getByCredentials } = require('../interactors/user_interactor');

app.post('/login', (req, res) =>
    getByCredentials(req.body, res));

app.post('/signup', (req, res) =>
    add(req.body, res));

module.exports = app;