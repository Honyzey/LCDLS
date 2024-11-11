<script setup>
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

    <div id="app">
        <header>
            <div class="navbar">
                <div class="logo">
                    <img src="./assets/logo.png" width="100px">
                    <h1>Le Coin DLS</h1>
                </div>
                <nav>
                    <ul class="nav-links">
                        <li><i class="fa-solid fa-house"></i><router-link to="/">Accueil</router-link></li>
                        <li><i class="fa-solid fa-rectangle-list"></i><router-link to="/annonce">Annonce</router-link></li>
                        <li><i class="fa-solid fa-circle-plus"></i><router-link to="/annonce/creation">Céer une annonce</router-link></li>
                        <li><i class="fa-solid fa-comments"></i><router-link to="/message">Messages</router-link></li>
                        <li><i class="fa-solid fa-user"></i><router-link to="/profil">Profil</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>
        
    
        <router-view />
    </div>
</template>

<style scoped>
header {
    background-color: #2C3E50;
    color: white;
    padding: 1rem 2rem;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    margin-right: 50px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Styles pour la navigation */
.nav-links {
    display: flex;
    gap: 5px;
}

.nav-links li {
    display: inline;
    padding: 8px 15px;
    border-radius: 4px;
    transition: background-color 0.6s;
}

.nav-links li:hover {
    background-color: #34495E;
}

.nav-links a {
    color: white;
    font-size: 20px;
    font-weight: 600;
    padding: 8px 15px;
    border-radius: 4px;
    transition: background-color 0.6s;
}
</style>
