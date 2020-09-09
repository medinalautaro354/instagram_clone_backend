const Commentary = require('../../models/commentary');
const Story = require('../../models/story');

const addComentaryToStory = ({ storyId, userId, paragraph }, res) => {

    Commentary.create({ user: userId, paragraph }, (error, entity) => {
        if (error) {
            return res.status(400)
                .json({
                    ok: false,
                    error
                });
        }

        Story.findById(storyId, (error, entityStory) => {

            if (error) {

                Commentary.deleteOne(entity);

                return res.status(400)
                    .json({
                        ok: false,
                        error
                    })
            }

            entityStory.comments = [...entityStory.comments, entity];

            entityStory.save();

            return res.json({
                ok: true,
                entity
            })
        })

    })
}

module.exports = {
    addComentaryToStory
}