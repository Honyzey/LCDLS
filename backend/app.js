const express = require('express');
const sequelize = require('./config/config');
const utilisateurRoutes = require('./routes/utilisateur');

const app = express();
app.use(express.json());

// Routes
app.use('/api/utilisateurs', utilisateurRoutes);

// Connecte-toi à la base de données et lance le serveur
sequelize.sync({ force: true }).then(() => {
  app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
  });
});
