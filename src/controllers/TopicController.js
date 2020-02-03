const Post = require('../models/Post');
const Topic = require('../models/Topic');

module.exports = {
  async index(req, res) {
    const { post_id } = req.params;

    const post = await Post.findByPk(post_id, {
      include: { association: 'topics' },
    });

    return res.json(post);
  },

  async store(req, res) {
    const { post_id } = req.params;
    const { title, text } = req.body;

    const post = await Post.findByPk(post_id);

    if (!post) {
      return res.status(400).json({ error: 'Post not found' });
    }

    const topic = await Topic.create({ title, text, post_id });

    return res.json(topic);
  },
};
