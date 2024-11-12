// app.js
const express = require('express');
const sequelize = require('./config/database');
const User = require('./models/User');
const Annonce = require('./models/Annonce');
const Image = require('./models/Image');
const Message = require('./models/Message');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 8080;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie.');
        await sequelize.sync({ force: true }); // Attention: force: true va supprimer et recréer les tables
        app.listen(PORT, () => {
            console.log(`Serveur démarré sur le port ${PORT}`);
        });
    } catch (error) {
        console.error('Impossible de se connecter à la base de données:', error);
    }
};

startServer();