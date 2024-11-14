// models/Image.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Annonce = require('./Annonce');

const Image = sequelize.define('Image', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    annonce_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Annonce,
            key: 'id',
        },
        allowNull: false,
    },
    image_base64: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    add_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'image',
    timestamps: false,
});

Image.belongsTo(Annonce, { foreignKey: 'annonce_id' });
Annonce.hasMany(Image, { foreignKey: 'annonce_id' });

module.exports = Image;