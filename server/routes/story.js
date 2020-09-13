const express = require("express");
const app = express();

const { add } = require('../interactors/persistance/add_story_inderactor');
const { getByFollowerIdAndOrderByDate } = require('../interactors/story_interactor');
const { validateToken } = require("../middlewares/authentication");

app.get('/stories/:from/:take', validateToken, async (req, res) =>{

    await getByFollowerIdAndOrderByDate(req.params, req.user, res);
});

app.post('/stories', async (req, res) =>{
    add(req.body, res);
});

module.exports = app;