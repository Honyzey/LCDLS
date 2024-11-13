// app.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');
const annonceRoutes = require('./routes/annonce');
const messageRoutes = require('./routes/message');
const userRoutes = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/annonces', annonceRoutes);
app.use('/messages', messageRoutes);
app.use('/users', userRoutes);

// Servir le fichier de documentation
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie.');
        await sequelize.sync({ force: false }); // Attention: force: true va supprimer et recréer les tables
        app.listen(PORT, () => {
            console.log(`Serveur démarré sur le port ${PORT}\nDocumentation disponible à l'adresse http://localhost:${PORT}/documentation.html`);
        });
    } catch (error) {
        console.error('Impossible de se connecter à la base de données:', error);
    }
};

startServer();