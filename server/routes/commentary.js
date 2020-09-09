const express = require('express')
const app = express()

const { addComentaryToStory } = require('../interactors/persistance/add_commentary_interactor')

app.post('/comments', (req, res) =>{
    addComentaryToStory(req.body, res);
})

module.exports = app;