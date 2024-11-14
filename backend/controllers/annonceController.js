// controllers/annonceController.js
const Annonce = require('../models/Annonce');
const Categorie = require('../models/Categorie');
const Image = require('../models/Image');
const moment = require('moment');

const createAnnonce = async (req, res) => {
    const { categorie_id, title, prix, description } = req.body;
    const user_id = req.user.id; // Extraire l'ID de l'utilisateur à partir du token

    try {
        const annonce = await Annonce.create({
            user_id,
            categorie_id,
            title,
            prix,
            description,
        });

        if (req.files && req.files.length > 0) {
            const imagePromises = req.files.map(file => {
                return Image.create({
                    annonce_id: annonce.id,
                    image_base64: file.buffer.toString('base64'),
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
            include: [{ model: Categorie }, { model: Image }],
        });

        if (!annonce) {
            return res.status(404).json({ message: 'Annonce non trouvée' });
        }
        // Formater la date de création avec Moment.js
        const formattedCreationDate = moment(annonce.creation_date).format('DD/MM/YYYY HH:mm');

        res.status(200).json({
            ...annonce.toJSON(),
            creation_date: formattedCreationDate,
        });
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'annonce:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const getAnnonces = async (req, res) => {
    try {
        const annonces = await Annonce.findAll({
            include: [{ model: Categorie }, { model: Image }],
        });

        res.status(200).json(annonces);
    } catch (error) {
        console.error('Erreur lors de la récupération des annonces:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const searchAnnonces = async (req, res) => {
    const { query, categorie_id, etat, prix_max } = req.query;

    try {
        const whereClause = {};

        if (query) {
            whereClause.title = { [Op.like]: `%${query}%` };
        }
        if (categorie_id) {
            whereClause.categorie_id = categorie_id;
        }
        if (etat) {
            whereClause.etat = etat;
        }
        if (prix_max) {
            whereClause.prix = { [Op.lte]: prix_max };
        }

        const annonces = await Annonce.findAll({
            where: whereClause,
            include: [{ model: Categorie }, { model: Image }],
        });

        res.status(200).json(annonces);
    } catch (error) {
        console.error('Erreur lors de la recherche des annonces:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await Categorie.findAll();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

module.exports = { createAnnonce, getAnnonce, getAnnonces, searchAnnonces, getCategories };