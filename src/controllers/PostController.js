const Post = require('../models/Post');

module.exports = {
  async index(req, res) {
    const posts = await Post.findAll();

    return res.json(posts);
  },

  async store(req, res) {
    const { title } = req.body;

    const post = await Post.create({ title });

    return res.json(post);
  },
};
