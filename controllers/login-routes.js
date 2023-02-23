const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Handle POST request to /login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//  Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;