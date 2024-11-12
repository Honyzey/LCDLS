// routes/message.js
const express = require('express');
const { sendMessage, getMessages, markAsRead } = require('../controllers/messageController');

const router = express.Router();

router.post('/', sendMessage);
router.get('/:userId', getMessages);
router.put('/:id/read', markAsRead);

module.exports = router;