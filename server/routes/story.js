const express = require("express");
const app = express();

const { add } = require('../interactors/persistance/add_story_inderactor');
const { json } = require("body-parser");

app.get('/stories',(req, res) =>{

    return res.json({
        ok: true,
        message: 'funciona papa'
    })
});

app.post('/stories', async (req, res) =>{
    add(req.body, res);
});

module.exports = app;