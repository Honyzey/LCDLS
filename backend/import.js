// import.js
const importJSON = require('./utils/jsonImporter');
const sequelize = require('./config/database');

const startImport = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie.');
        await sequelize.sync({ force: true }); // Attention: force: true va supprimer et recréer les tables
        importJSON('./users.json');
    } catch (error) {
        console.error('Impossible de se connecter à la base de données:', error);
    }
};

startImport();