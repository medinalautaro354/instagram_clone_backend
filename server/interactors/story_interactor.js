const Story = require('../models/story');
const User = require('../models/user');

const getByFollowerIdAndOrderByDate = async ({ id, from, take }, res) => {

    from = Number(from);

    take = Number(take);

    let userRequest = await User.findById(id);

    let usersIds = userRequest.followed.map((f) => f.id);

    usersIds = [...usersIds, id]

    await Story.find({isActive: true, user: usersIds })
        .populate('user', 'username')
        .sort({creationDate: -1})
        .skip(from)
        .limit(take)
        .exec((error, stories) => {
            if (error) {
                return res.status(400)
                    .json({
                        ok: false,
                        error
                    })
            }

            return res.json({
                ok: true,
                stories
            })

        })
}

module.exports = {
    getByFollowerIdAndOrderByDate
}