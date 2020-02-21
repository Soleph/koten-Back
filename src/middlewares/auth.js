const { promisify } = require('util');

const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');

module.exports = {
  async auth(req, res, next) {
    try {
      const token = req.headers.authorization.split(' ')[1];

      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      req.userId = decoded.id;

      return next();
    } catch (err) {
      return res.status(401).json({ error: 'Token invalid' });
    }
  },
};
