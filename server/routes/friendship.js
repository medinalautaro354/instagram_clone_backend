const express = require("express");
const app = express();

const {addFollow, removeFollower} = require('../interactors/persistance/update_user_interactor');

app.put('/friendships/:id/follow', (req, res) => {

    let dto = {
        followerId: req.params.id,
        followedId: req.body.followedId
    };

    addFollow(dto, res)
});

app.put('/friendships/:id/unfollow',(req, res) =>{
    
    let dto = {
        followerId: req.params.id,
        followedId: req.body.followedId
    };

    removeFollower(dto, res);
});


module.exports = app;