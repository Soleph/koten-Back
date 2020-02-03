const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const User = require('../models/User');
const Post = require('../models/Post');
const Topic = require('../models/Topic');

const connection = new Sequelize(databaseConfig);

User.init(connection);
Post.init(connection);
Topic.init(connection);

Post.associate(connection.models);
Topic.associate(connection.models);

module.exports = connection;
