// controllers/userController.js
const User = require('../models/User');
const Annonce = require('../models/Annonce');

const getUserInfo = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id, {
            include: [{ model: Annonce }],
        });

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const getUserProfile = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id, {
            include: [{ model: Annonce }],
        });

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        res.status(200).json({
            mail: user.mail,
            identifiant: user.identifiant,
            inscription_date: user.inscription_date,
            annonces: user.Annonces,
        });
    } catch (error) {
        console.error('Erreur lors de la récupération du profil de l\'utilisateur:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

module.exports = { getUserInfo, getUserProfile };