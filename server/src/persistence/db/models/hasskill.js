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
      HasSkill.belongsTo(models.User, { foreignKey: 'userId' })
      HasSkill.belongsTo(models.Skill, { foreignKey: 'skillId' })
    }
  }
  HasSkill.init(
    {
      userId: DataTypes.INTEGER,
      skillId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'HasSkill',
    }
  )
  return HasSkill
}
