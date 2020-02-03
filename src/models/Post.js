const { Model, Sequelize } = require('sequelize');

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Topic, { foreignKey: 'post_id', as: 'topics' });
  }
}

module.exports = Post;
