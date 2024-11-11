const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Utilisateur = sequelize.define('Utilisateur', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateInscription: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  level: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }
});

module.exports = Utilisateur;