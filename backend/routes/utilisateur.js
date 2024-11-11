const express = require('express');
const router = express.Router();
const Utilisateur = require('../models/Utilisateur');

// Route pour changer le niveau d'un utilisateur
router.put('/changer-niveau/:id', async (req, res) => {
  const { niveau } = req.body;
  const { id } = req.params;

  try {
    const utilisateur = await Utilisateur.findByPk(id);
    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Vérifie si le niveau est valide (0, 1, 2)
    if (![0, 1, 2].includes(niveau)) {
      return res.status(400).json({ message: 'Niveau invalide' });
    }

    utilisateur.niveau = niveau;
    await utilisateur.save();

    res.status(200).json(utilisateur);
  } catch (error) {
    console.error('Erreur lors du changement de niveau :', error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
});

module.exports = router;
