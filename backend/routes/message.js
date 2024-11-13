// routes/message.js
const express = require('express');
const { sendMessage, getMessages, markAsRead } = require('../controllers/messageController');

const router = express.Router();

/**
 * @route POST /messages
 * @desc Envoie un message
 * @access Public
 * @body { expediteur_id: number, destinataire_id: number, content: string }
 * @response { id: number, expediteur_id: number, destinataire_id: number, content: string, send_date: string, lu: boolean }
 * @error { message: string }
 */
router.post('/', sendMessage);

/**
 * @route GET /messages/:userId
 * @desc Récupère tous les messages pour un utilisateur
 * @access Public
 * @params { userId: number }
 * @response [{ id: number, expediteur_id: number, destinataire_id: number, content: string, send_date: string, lu: boolean }]
 * @error { message: string }
 */
router.get('/:userId', getMessages);

/**
 * @route PUT /messages/:id/read
 * @desc Marque un message comme lu
 * @access Public
 * @params { id: number }
 * @response { message: string }
 * @error { message: string }
 */
router.put('/:id/read', markAsRead);

module.exports = router;