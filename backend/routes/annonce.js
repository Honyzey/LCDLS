const express = require('express');
const router = express.Router();
const Annonce = require('../models/Annonce');

// Route pour changer l'état d'une annonce
router.put('/changer-etat/:id', async (req, res) => {
    const { etat } = req.body;
    const { id } = req.params;

    try {
        const annonce = await Annonce.findByPk(id);
        if (!annonce) {
            return res.status(404).json({ message: 'Annonce non trouvée' });
        }

        // Vérifie si l'état est valide (0 ou 1)
        if (![0, 1].includes(etat)) {
            return res.status(400).json({ message: 'État invalide' });
        }

        annonce.etat = etat;
        await annonce.save();

        res.status(200).json(annonce);
    } catch (error) {
        console.error('Erreur lors du changement de l\'état de l\'annonce :', error);
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
});

module.exports = router;
