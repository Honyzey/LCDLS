// controllers/annonceController.js
const Annonce = require('../models/Annonce');

const createAnnonce = async (req, res) => {
    const { user_id, title, categorie, prix, description } = req.body;

    try {
        const annonce = await Annonce.create({
            user_id,
            title,
            categorie,
            prix,
            description,
        });

        res.status(201).json(annonce);
    } catch (error) {
        console.error('Erreur lors de la création de l\'annonce:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const getAnnonce = async (req, res) => {
    const { id } = req.params;

    try {
        const annonce = await Annonce.findByPk(id);

        if (!annonce) {
            return res.status(404).json({ message: 'Annonce non trouvée' });
        }

        res.status(200).json(annonce);
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'annonce:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

module.exports = { createAnnonce, getAnnonce };