// routes/annonce.js
const express = require('express');
const { createAnnonce, getAnnonce, getAnnonces, searchAnnonces } = require('../controllers/annonceController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

/**
 * @route POST /annonces
 * @desc Crée une nouvelle annonce
 * @access Private
 * @body { user_id: number, title: string, categorie: string, prix: number, description: string, images: array }
 * @response { id: number, user_id: number, title: string, categorie: string, prix: number, description: string, etat: string, creation_date: string }
 * @error { message: string }
 */
router.post('/', authenticateToken, createAnnonce);

/**
 * @route GET /annonces/:id
 * @desc Récupère une annonce par son ID
 * @access Public
 * @params { id: number }
 * @response { id: number, user_id: number, title: string, categorie: string, prix: number, description: string, etat: string, creation_date: string, images: array }
 * @error { message: string }
 */
router.get('/:id', getAnnonce);

/**
 * @route GET /annonces
 * @desc Récupère toutes les annonces
 * @access Public
 * @response { annonces: array }
 * @error { message: string }
 */
router.get('/', getAnnonces);

/**
 * @route GET /annonces/search
 * @desc Recherche des annonces avec des filtres
 * @access Public
 * @query { query: string, categorie: string, etat: string, prix_max: number }
 * @response { annonces: array }
 * @error { message: string }
 */
router.get('/search', searchAnnonces);

module.exports = router;