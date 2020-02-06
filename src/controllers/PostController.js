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

  async update(req, res) {
    const { title } = req.body;

    const post = await Post.update(
      { title },
      { returning: true, where: { id: req.params.id } }
    );

    return res.json(post);
  },

  async delete(req, res) {
    await Post.destroy({ where: { id: req.params.id } });

    return res.json('sucess');
  },
};
