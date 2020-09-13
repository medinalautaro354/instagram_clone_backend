const express = require("express");
const app = express();

const {addFollow, removeFollower} = require('../interactors/persistance/update_user_interactor');

app.put('/users/:id/friendships/follow', (req, res) => {

    let dto = {
        followerId: req.params.id,
        followedId: req.body.followedId
    };

    addFollow(dto, res)
});

app.put('/users/:id/friendships/unfollow',(req, res) =>{

    let dto = {
        followerId: req.params.id,
        followedId: req.body.followedId
    };

    removeFollower(dto, res);
});


module.exports = app;