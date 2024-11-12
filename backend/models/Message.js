// models/Message.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Message = sequelize.define('Message', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    expediteur_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    destinataire_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    send_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    lu: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'message',
    timestamps: false,
});

Message.belongsTo(User, { as: 'expediteur', foreignKey: 'expediteur_id' });
Message.belongsTo(User, { as: 'destinataire', foreignKey: 'destinataire_id' });

module.exports = Message;