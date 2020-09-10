const User = require('../../models/user');

const addFollow = ({ followerId, followedId }, res) => {

    User.findById(followedId, (error, followedEntity) => {
        if (error) {
            return res.status(400)
                .json({
                    ok: false,
                    error
                })
        }

        User.findById(followerId, (error, followerEntity) => {
            if (error) {

            }

            followerEntity.followed = [...followerEntity.followed, followedEntity];

            followerEntity.save();

            followedEntity.followers = [...followedEntity.followers, followerEntity];

            followedEntity.save();

            return res.json({
                ok: true,
                result: "following"
            })
        })
    })
}

const removeFollower = ({ followerId, followedId }, res) => {

    User.findById(followedId, (error, followedEntity) => {
        if (error) {
            return res.status(400)
                .json({
                    ok: false,
                    error
                })
        }

        User.findById(followerId, (error, followerEntity) => {
            if (error) {

            }

            followedEntity.followers = followedEntity.followers.filter((f) =>{
                return f.id !== followerId;
            });

            followedEntity.save();

            followerEntity.followed = followerEntity.followed.filter((f) =>{
                return f.id !== followedId;
            });

            followerEntity.save();

            return res.json({
                ok: true
            })
        })
    });
}

module.exports = {
    addFollow,
    removeFollower
}