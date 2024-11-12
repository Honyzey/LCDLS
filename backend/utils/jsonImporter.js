// utils/jsonImporter.js
const fs = require('fs');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const importJSON = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);

    users.forEach(async (user) => {
        const mail = user.ID;
        const password = user.MDP;

        if (!mail || !password) {
            console.error('Données manquantes pour l\'utilisateur:', user);
            return;
        }

        const identifiant = mail.split('@')[0];
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            await User.create({
                mail,
                password: hashedPassword,
                identifiant,
            });
            console.log(`Utilisateur ${identifiant} importé avec succès.`);
        } catch (error) {
            console.error(`Erreur lors de l'importation de l'utilisateur ${identifiant}:`, error);
        }
    });
};

module.exports = importJSON;