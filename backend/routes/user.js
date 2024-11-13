// routes/user.js
const express = require('express');
const { getUserInfo, getUserProfile } = require('../controllers/userController');

const router = express.Router();

/**
 * @route GET /users/:id
 * @desc Récupère les informations d'un utilisateur par son ID
 * @access Public
 * @params { id: number }
 * @response { id: number, mail: string, password: string, level: string, identifiant: string, inscription_date: string, last_connexion: string, statut: string, Annonces: [{ id: number, user_id: number, title: string, categorie: string, prix: number, description: string, etat: string, creation_date: string }] }
 * @error { message: string }
 */
router.get('/:id', getUserInfo);

/**
 * @route GET /users/profile/:id
 * @desc Récupère le profil d'un utilisateur par son ID
 * @access Public
 * @params { id: number }
 * @response { mail: string, identifiant: string, inscription_date: string, annonces: [{ id: number, user_id: number, title: string, categorie: string, prix: number, description: string, etat: string, creation_date: string }] }
 * @error { message: string }
 */
router.get('/profile/:id', getUserProfile);

module.exports = router;