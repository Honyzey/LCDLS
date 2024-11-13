// routes/annonce.js
const express = require('express');
const { createAnnonce, getAnnonce } = require('../controllers/annonceController');

const router = express.Router();

/**
 * @route POST /annonces
 * @desc Crée une nouvelle annonce
 * @access Public
 * @body { user_id: number, title: string, categorie: string, prix: number, description: string }
 * @response { id: number, user_id: number, title: string, categorie: string, prix: number, description: string, etat: string, creation_date: string }
 * @error { message: string }
 */
router.post('/', createAnnonce);

/**
 * @route GET /annonces/:id
 * @desc Récupère une annonce par son ID
 * @access Public
 * @params { id: number }
 * @response { id: number, user_id: number, title: string, categorie: string, prix: number, description: string, etat: string, creation_date: string }
 * @error { message: string }
 */
router.get('/:id', getAnnonce);

module.exports = router;