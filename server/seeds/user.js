const bcrypt = require('bcryptjs');

const User = require('../models/user');

const getUsers = async () => {
    const password = await bcrypt.hashSync('123456', 10);
    
    return [
        new User({
            email:'testeandouno@asd.com,',
            password: password,
            username: 'testeandouno'
        }),
        new User({
            email:'testeandodos@asd.com,',
            password: password,
            username: 'testeandodos'
        }),
        new User({
            email:'testeandotres@asd.com,',
            password: password,
            username: 'testeandotres'
        }),
        new User({
            email:'testeandocuatro@asd.com,',
            password: password,
            username: 'testeandocuatro'
        }),
        new User({
            email:'testeando5@asd.com,',
            password: password,
            username: 'testeando5'
        }),
        new User({
            email:'testeando6@asd.com,',
            password: password,
            username: 'testeando6'
        }),
        new User({
            email:'testeando7@asd.com,',
            password: password,
            username: 'testeando7'
        }),
        new User({
            email:'testeando8@asd.com,',
            password: password,
            username: 'testeando8'
        }),
        new User({
            email:'testeando9@asd.com,',
            password: password,
            username: 'testeando9'
        }),
        new User({
            email:'testeando10@asd.com,',
            password: password,
            username: 'testeando10'
        }),
    ]
}

module.exports = {
    getUsers
}