'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Mentorship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Mentorship.init(
    {
      accepted: DataTypes.BOOLEAN,
      days_duration: DataTypes.INTEGER,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Mentorship',
    }
  )
  return Mentorship
}
