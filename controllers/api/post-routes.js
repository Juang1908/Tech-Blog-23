const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all posts with associated user and comment data
router.get('/posts', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }, { model: Comment, include: [User] }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get a specific post with associated user and comment data
router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comment, include: [User] }],
    });

    const post = postData.get({ plain: true });

    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new post (requires authentication)
router.post('/posts', withAuth, async (req, res) => {
  try {
    const postData = await Post.create(req.body);

    res.json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update an existing post (requires authentication)
router.put('/posts/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete a post (requires authentication)
router.delete('/posts/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
