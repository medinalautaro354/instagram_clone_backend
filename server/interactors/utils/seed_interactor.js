const {getUsers} = require('../../seeds/user');
const User = require('../../models/user');

const runSeeds = () =>{
    runSeedUsers();

}
const runSeedUsers = async () =>{ 

    const users = await getUsers();
    users.forEach(element => {

        element.save((error, entity) =>{
            if(entity){
                console.log(`Se cargo correctamente el usuario ${entity.email}`);
            }
        })
    });
}

module.exports = {
    runSeeds
}