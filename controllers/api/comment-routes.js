const router = require('express').Router();
const { Post, Comment } = require('../../models');

router.get('/', (req,res) => {
    Comment.findAll({
        include:
            {
                model: Post,
                attributes: ['title', 'post_text']
            }   
    })
    .then(dbCommentData => {
        res.json(dbCommentData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req,res) => {
    if(req.session){
        Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    } 
});

router.delete('/:id', (req,res) => {
    Comment.destroy ({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData){
            res.status(404).json({ message: 'There is no comment associated with this ID.' });
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;