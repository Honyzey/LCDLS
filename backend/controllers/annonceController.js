// controllers/annonceController.js
const Annonce = require('../models/Annonce');
const Categorie = require('../models/Categorie');
const Image = require('../models/Image');
const moment = require('moment');

const createAnnonce = async (req, res) => {
    const { categorie_id, title, prix, description, etat } = req.body; // Ajoutez `etat` ici
    const user_id = req.user.id; // Extraire l'ID de l'utilisateur à partir du token

    try {
        const annonce = await Annonce.create({
            user_id,
            categorie_id,
            title,
            prix,
            description,
            etat // Assurez-vous que l'état est bien utilisé ici
        });

        // Ajoutez les images si elles existent
        if (req.files) {
            const images = req.files.map(file => ({
                annonce_id: annonce.id,
                image_base64: file.buffer.toString('base64')
            }));
            await Image.bulkCreate(images);
        }

        res.status(201).json(annonce);
    } catch (error) {
        console.error('Erreur lors de la création de l\'annonce:', error);
        res.status(500).json({ message: 'Erreur lors de la création de l\'annonce' });
    }
};

const getAnnonce = async (req, res) => {
    const { id } = req.params;

    try {
        const annonce = await Annonce.findByPk(id, {
            include: [Categorie, Image]
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
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'annonce' });
    }
};

const getAnnonces = async (req, res) => {
    try {
        const annonces = await Annonce.findAll({
            include: [Categorie, Image]
        });
        res.json(annonces);
    } catch (error) {
        console.error('Erreur lors de la récupération des annonces:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des annonces' });
    }
};

const searchAnnonces = async (req, res) => {
    const { query, categorie_id, etat, prix_max } = req.query;

    try {
        const where = {};
        if (query) {
            where.title = { [Op.like]: `%${query}%` };
        }
        if (categorie_id) {
            where.categorie_id = categorie_id;
        }
        if (etat) {
            where.etat = etat;
        }
        if (prix_max) {
            where.prix = { [Op.lte]: prix_max };
        }

        const annonces = await Annonce.findAll({
            where,
            include: [Categorie, Image]
        });
        res.json(annonces);
    } catch (error) {
        console.error('Erreur lors de la recherche des annonces:', error);
        res.status(500).json({ message: 'Erreur lors de la recherche des annonces' });
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await Categorie.findAll();
        res.json(categories);
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des catégories' });
    }
};

const getEtats = async (req, res) => {
    try {
        const etats = Annonce.rawAttributes.etat.values;
        res.json(etats);
    } catch (error) {
        console.error('Erreur lors de la récupération des états:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des états' });
    }
};

const getLatestAnnonces = async (req, res) => {
    try {
        const annonces = await Annonce.findAll({
            limit: 10,
            order: [['creation_date', 'DESC']],
            include: [Categorie, Image]
        });
        res.json(annonces);
    } catch (error) {
        console.error('Erreur lors de la récupération des dernières annonces:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des dernières annonces' });
    }
};

const getAnnoncesByUser = async (req, res) => {
    const user_id = req.user.id;

    try {
        const annonces = await Annonce.findAll({
            where: { user_id },
            include: [Categorie, Image]
        });
        res.json(annonces);
    } catch (error) {
        console.error('Erreur lors de la récupération des annonces de l\'utilisateur:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des annonces de l\'utilisateur' });
    }
};

const getAnnoncesByUserId = async (req, res) => {
    const { id } = req.params;

    try {
        const annonces = await Annonce.findAll({
            where: { user_id: id },
            include: [Categorie, Image]
        });
        res.json(annonces);
    } catch (error) {
        console.error('Erreur lors de la récupération des annonces de l\'utilisateur:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des annonces de l\'utilisateur' });
    }
};

module.exports = { createAnnonce, getAnnonce, getAnnonces, searchAnnonces, getCategories, getEtats, getLatestAnnonces, getAnnoncesByUser, getAnnoncesByUserId };