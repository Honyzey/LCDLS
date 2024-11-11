const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Utilisateur = require('./Utilisateur');
const Annonce = require('./Annonce');

const Message = sequelize.define('Message', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date_envoye: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  lu: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Relations
Message.belongsTo(Utilisateur, { as: 'sender', foreignKey: 'sender_id' });
Message.belongsTo(Utilisateur, { as: 'receiver', foreignKey: 'receiver_id' });
Message.belongsTo(Annonce, { foreignKey: 'annonce_id' });

module.exports = Message;
