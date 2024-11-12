// routes/annonce.js
const express = require('express');
const { createAnnonce, getAnnonce } = require('../controllers/annonceController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticateToken, createAnnonce);
router.get('/:id', authenticateToken, getAnnonce);

module.exports = router;