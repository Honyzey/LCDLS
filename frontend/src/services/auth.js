// src/services/auth.js
export function isAuthenticated() {
    return !!localStorage.getItem('authToken');
}

export function login(token) {
    localStorage.setItem('authToken', token);
}

export function logout() {
    localStorage.removeItem('authToken');
}