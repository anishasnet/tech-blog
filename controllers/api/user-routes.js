const router = require('express').Router();
const {Post, User, Comment} = require('../../models');

router.post('/signup', (req, res) => {
    User.create(req.body)
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json({ user: dbUserData, message: 'You are now logged in!'});
      });
    });
});
  
  
router.post('/login', (req, res) => {
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that username!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        // declare session variables
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json({ user: dbUserData, message: 'You are now logged in!'});
      });
    });
  })
  
router.post('/logout', (req, res) => {
    
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
      res.json({message: 'Worked'})
      console.log(req.session)
    }
    else {
      res.status(404).end();
    }
})
  
module.exports = router;