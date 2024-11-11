const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Utilisateur = require('./Utilisateur');

const Annonce = sequelize.define('Annonce', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  prix: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  categorie: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date_publication: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }
});

// Définir la relation avec Utilisateur
Annonce.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id' });

module.exports = Annonce;
