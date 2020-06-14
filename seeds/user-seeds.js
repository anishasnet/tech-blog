const { User } = require('../models');

const userData = [
    {
        username: 'Xandromus',
        password: 'xandromuspassword'
    },
    {
        username: 'Lernatino',
        password: 'webdev'
    },
    {
        username: 'Scott',
        password: 'loveorms'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;