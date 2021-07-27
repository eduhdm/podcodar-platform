'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Mentorship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mentorship.belongsTo(models.User, { foreignKey: 'mentor_id', as: 'mentor' })
      Mentorship.belongsTo(models.User, { foreignKey: 'apprentice_id', as: 'apprentice' })
    }
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
