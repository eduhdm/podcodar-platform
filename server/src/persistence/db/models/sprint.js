'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Sprint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sprint.belongsTo(models.Mentorship, { foreignKey: 'mentorship_id' })
      Sprint.hasMany(models.Activity, { foreignKey: 'sprint_id' })
    }
  }
  Sprint.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      finished: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Sprint',
    }
  )
  return Sprint
}
