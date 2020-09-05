const express = require('express')
const app = express()

const { Add } = require('../interactors/persistance/add_user_interactor');

app.post('/login', (req, res) => {


    Add(req.body);

    res.json({
        ok: true,
        message: 'funciona bien pibe'
    })
})

app.post('/signin', (req, res) =>
    Add(req.body, res));

module.exports = app;