// models/Utilisateur.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Utilisateur = sequelize.define('Utilisateur', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  mail: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  mot_de_passe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  niveau: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user',
  },
  identifiant: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  date_inscription: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  derniere_connexion: {
    type: DataTypes.DATE,
  },
  statut: {
    type: DataTypes.ENUM('actif', 'suspendu', 'supprimé'),
    defaultValue: 'actif',
  },
});

module.exports = Utilisateur;