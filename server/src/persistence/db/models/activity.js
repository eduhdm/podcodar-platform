'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activity.belongsTo(models.Sprint, { foreignKey: 'sprint_id' })
    }
  }
  Activity.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      done: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Activity',
    }
  )
  return Activity
}
