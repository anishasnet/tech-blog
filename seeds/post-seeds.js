const { Post } = require('../models');

const postData = [
    {
        title: 'Why MVC is so important',
        content: 'MVC allows developers to have a true seperation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
        created_at: new Date(),
        user_id: 2
    },
    {
        title: 'Authentication vs Authorization',
        content: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
        created_at: 'Tue Jun 9 2020 16:24:25 GMT-0700 (Pacific Daylight Time)',
        user_id: 1
    },
    {
        title: 'Object Relational Mapping',
        content: 'I have really loved learning about ORMs. It\'s really simplified the way I make queries in SQL!',
        created_at: 'Fri Jun 12 2020 11:14:55 GMT-0700 (Pacific Daylight Time)',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;