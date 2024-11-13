// controllers/annonceController.js
const Annonce = require('../models/Annonce');
const Image = require('../models/Image');

const createAnnonce = async (req, res) => {
    const { user_id, title, categorie, prix, description, images } = req.body;

    try {
        const annonce = await Annonce.create({
            user_id,
            title,
            categorie,
            prix,
            description,
        });

        if (images && images.length > 0) {
            const imagePromises = images.map(imageBase64 => {
                return Image.create({
                    annonce_id: annonce.id,
                    image_base64: imageBase64,
                });
            });
            await Promise.all(imagePromises);
        }

        res.status(201).json(annonce);
    } catch (error) {
        console.error('Erreur lors de la création de l\'annonce:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const getAnnonce = async (req, res) => {
    const { id } = req.params;

    try {
        const annonce = await Annonce.findByPk(id, {
            include: [{ model: Image }],
        });

        if (!annonce) {
            return res.status(404).json({ message: 'Annonce non trouvée' });
        }

        res.status(200).json(annonce);
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'annonce:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const getAnnonces = async (req, res) => {
    try {
        const annonces = await Annonce.findAll({
            include: [{ model: Image }],
        });

        res.status(200).json(annonces);
    } catch (error) {
        console.error('Erreur lors de la récupération des annonces:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const searchAnnonces = async (req, res) => {
    const { query, categorie, etat, prix_max } = req.query;

    try {
        const whereClause = {};

        if (query) {
            whereClause.title = { [Op.like]: `%${query}%` };
        }
        if (categorie) {
            whereClause.categorie = categorie;
        }
        if (etat) {
            whereClause.etat = etat;
        }
        if (prix_max) {
            whereClause.prix = { [Op.lte]: prix_max };
        }

        const annonces = await Annonce.findAll({
            where: whereClause,
            include: [{ model: Image }],
        });

        res.status(200).json(annonces);
    } catch (error) {
        console.error('Erreur lors de la recherche des annonces:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

module.exports = { createAnnonce, getAnnonce, getAnnonces, searchAnnonces };