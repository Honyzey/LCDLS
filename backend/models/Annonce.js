// models/Annonce.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Categorie = require('./Categorie');

const Annonce = sequelize.define('Annonce', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    categorie_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Categorie,
            key: 'id',
        },
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prix: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    etat: {
        type: DataTypes.ENUM('Neuf', 'Très bon', 'Bon', 'Usagé'),
        allowNull: false,
    },
    statut: {
        type: DataTypes.ENUM('en_vente', 'vendu', 'suspendu'),
        defaultValue: 'en_vente',
    },
    creation_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'annonces',
    timestamps: false,
});

Annonce.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Annonce, { foreignKey: 'user_id' });

Annonce.belongsTo(Categorie, { foreignKey: 'categorie_id' });
Categorie.hasMany(Annonce, { foreignKey: 'categorie_id' });

module.exports = Annonce;