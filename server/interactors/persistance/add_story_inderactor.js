const Story = require('../../models/story');

const add = ({userId, image, description }, res) =>{
    
    Story.create({user: userId, image: image, description: description},(error, entity)=>{
       if(error){
           res.status(400)
           .json({
               ok:false,
               error: error
           })
       }

       res.json({
           ok: true,
           story: entity
       })
    })
    
}
module.exports = {
    add
}

