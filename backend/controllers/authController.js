// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const login = async (req, res) => {
    const { mail, password } = req.body;

    try {
        const user = await User.findOne({ where: { mail } });

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        // Mettre à jour la date d'inscription si elle est null
        if (!user.inscription_date) {
            user.inscription_date = new Date();
        }

        // Mettre à jour la dernière connexion
        user.last_connexion = new Date();

        await user.save();

        // Générer un token JWT
        const token = jwt.sign({ id: user.id, mail: user.mail }, process.env.JWT_SECRET, {
            expiresIn: '1h', // Le token expire dans 1 heure
        });

        res.status(200).json({ message: 'Connexion réussie', token });
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

module.exports = { login };