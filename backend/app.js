// app.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');
const annonceRoutes = require('./routes/annonce');
const messageRoutes = require('./routes/message');
const userRoutes = require('./routes/user');

const app = express();

// Vérifiez que les variables d'environnement sont chargées
console.log('JWT_SECRET:', process.env.JWT_SECRET);
console.log('JWT_REFRESH_SECRET:', process.env.JWT_REFRESH_SECRET);

// Configuration de CORS
app.use(cors({
    origin: 'http://localhost:5173', // Remplacez par l'URL de votre frontend
    credentials: true
}));

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Routes
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