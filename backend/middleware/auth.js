// middleware/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
    const token = req.cookies.authToken;

    console.log('Token reçu:', token);

    if (token == null) {
        console.log('Erreur: Aucun token fourni');
        return res.sendStatus(401); // Si aucun token n'est fourni
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log('Erreur: Token invalide');
            return res.sendStatus(403); // Si le token est invalide
        }

        console.log('Token valide:', user);

        req.user = user;
        next();
    });
};

module.exports = authenticateToken;