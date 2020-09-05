const jwt = require('jsonwebtoken');

function buildToken(entity) {
    let token = jwt.sign({
        user: entity
    }, 
    process.env.SEED, 
    { expiresIn: process.env.EXPIRE_TOKEN });

    return token;
}

module.exports = {
    buildToken
}