const express = require("express");
const app = express();

const { add } = require('../interactors/persistance/add_story_inderactor');
const { getByFollowerIdAndOrderByDate } = require('../interactors/story_interactor');

app.get('/stories/:from/:take/users/:id', async (req, res) =>{

    await getByFollowerIdAndOrderByDate(req.params, res);
});

app.post('/stories', async (req, res) =>{
    add(req.body, res);
});

module.exports = app;