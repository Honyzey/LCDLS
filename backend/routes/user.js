// routes/user.js
const express = require('express');
const { getUserInfo, getUserProfile } = require('../controllers/userController');

const router = express.Router();

router.get('/:id', getUserInfo);
router.get('/profile/:id', getUserProfile);

module.exports = router;