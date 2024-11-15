// src/services/auth.js
import axios from 'axios';

export function isAuthenticated() {
    const token = getAuthToken();
    console.log('Vérification de l\'authentification, token:', token);
    return !!token; // Vérifiez si un token d'authentification est présent
}

export function login(token) {
    console.log('Connexion, token:', token);
    // Le token est maintenant géré par les cookies, donc pas besoin de le stocker dans le localStorage
}

export function logout() {
    console.log('Déconnexion');
    // Supprimez le cookie authToken
    document.cookie = 'authToken=; Max-Age=0; path=/';
}

export function getAuthToken() {
    const name = 'authToken=';
    console.log(document.cookie);
    const decodedCookie = decodeURIComponent(document.cookie);
    console.log(decodedCookie);
    const ca = decodedCookie.split(';');
    console.log(ca);
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            const token = c.substring(name.length, c.length);
            console.log('Token trouvé:', token);
            return token;
        }
    }
    console.log('Aucun token trouvé');
    return '';
}