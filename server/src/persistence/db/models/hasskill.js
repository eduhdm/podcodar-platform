'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class HasSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HasSkill.belongsTo(models.User, { foreignKey: 'user_id' })
      HasSkill.belongsTo(models.Skill, { foreignKey: 'skill_id' })
    }
  }
  HasSkill.init(
    {
      user_id: DataTypes.INTEGER,
      skill_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'HasSkill',
    }
  )
  return HasSkill
}
