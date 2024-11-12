// models/Annonce.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

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
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categorie: {
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
        type: DataTypes.ENUM('en_vente', 'vendu', 'suspendu'),
        defaultValue: 'en_vente',
    },
    creation_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'annonce',
    timestamps: false,
});

Annonce.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Annonce;