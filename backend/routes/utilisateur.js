const express = require('express');
const router = express.Router();
const Utilisateur = require('../models/Utilisateur');

// Exemple de route pour créer un utilisateur
router.post('/inscription', async (req, res) => {
  try {
    const { nom, email, mot_de_passe } = req.body;
    // Chiffrement du mot de passe avec bcrypt (à implémenter)
    const utilisateur = await Utilisateur.create({ nom, email, mot_de_passe });
    res.status(201).json(utilisateur);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
