'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.HasSkill, { foreignKey: 'user_id' })
      User.hasMany(models.WantsToLearnSkill, { foreignKey: 'user_id' })
      User.hasMany(models.Mentorship, { foreignKey: 'mentor_id', as: 'mentors' })
      User.hasMany(models.Mentorship, { foreignKey: 'apprentice_id', as: 'apprentices' })
    }
  }
  User.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      bio_description: DataTypes.STRING,
      photo_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  )
  return User
}
