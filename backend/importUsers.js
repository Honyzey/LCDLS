const fs = require('fs');
const csv = require('csv-parser');
const bcrypt = require('bcrypt');
const Utilisateur = require('./models/Utilisateur'); // Assure-toi que ton modèle Utilisateur est bien importé

// Remplace le chemin du fichier par le chemin de ton CSV
const filePath = './Lecoindls.csv';

async function importUsers() {
    const users = [];

    // Lecture du fichier CSV
    fs.createReadStream(filePath)
        .pipe(csv({ separator: ';' })) // Spécifie le séparateur ';'
        .on('data', async (row) => {

            // Récupère l'email et le mot de passe MD5
            const email = row['Identifiant']; // Utilise le nom correct de la colonne
            const md5Password = row['Mot de passe MD5']; // Utilise le nom correct de la colonne

            // Vérifie si les données sont présentes
            if (!email || !md5Password) {
                console.error('Mail ou mot de passe manquant dans la ligne:', row);
                return;
            }

            try {
                // Si tu veux remplacer le mot de passe MD5 par un mot de passe haché (bcrypt)
                const saltRounds = 10;
                console.log(`Hachage du mot de passe pour ${email}...`);

                // Hachage du mot de passe MD5 en bcrypt
                const hashedPassword = await bcrypt.hash(md5Password, saltRounds);

                // Ajouter l'utilisateur dans la base de données après hachage
                const utilisateur = await Utilisateur.create({
                    email: email,
                    mot_de_passe: hashedPassword,
                    niveau: 0, // Par défaut, niveau 0 (utilisateur)
                });

                console.log(`Utilisateur ${email} ajouté avec succès !`);
            } catch (error) {
                console.error('Erreur lors du chiffrement du mot de passe:', error);
            }
        })
        .on('end', () => {
            console.log('Importation des utilisateurs terminée !');
        });
}

// Exécuter la fonction d'importation
importUsers();
