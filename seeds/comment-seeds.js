const { Comment } = require('../models');
const commentData = [
    {
        comment_text: 'MVC stands for Model View Controller',
        post_id: 1,
        user_id: 1,
    },
    {
        comment_text: 'My favorite ORM is sequelize!',
        post_id: 3,
        user_id: 3,
    },
    {
        comment_text: 'Wow I didn\'t know the difference between the two. Thanks for sharing!',
        post_id: 2,
        user_id: 2,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;