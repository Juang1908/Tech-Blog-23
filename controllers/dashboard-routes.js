const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts for dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { posts, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get form to create new post
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', { loggedIn: true });
});

// Get form to edit existing post
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    const post = postData.get({ plain: true });

    res.render('edit-post', { post, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

