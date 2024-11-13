// src/services/auth.js
export function isAuthenticated() {
    return !!localStorage.getItem('authToken'); // Vérifiez si un token d'authentification est présent
}

export function login(token) {
    localStorage.setItem('authToken', token);
}

export function logout() {
    localStorage.removeItem('authToken');
}

// src/services/auth.js
export function getAuthToken() {
    return localStorage.getItem('authToken');
}