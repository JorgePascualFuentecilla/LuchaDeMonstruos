const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Villanos = require('./Villanos');

const BonificacionVillanos = sequelize.define('BonificacionVillanos', {
  idBonificacionVillanos: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  Villanos_idVillanos: {
    type: DataTypes.INTEGER,
    references: {
      model: Villanos,
      key: 'idVillanos'
    }
  },
  NombreBonificacion: {
    type: DataTypes.STRING(200),
    unique: true,
    allowNull: false
  },
  Bonificacion: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'BonificacionVillanos',
  timestamps: false
});

module.exports = BonificacionVillanos;