<template>

    <!-- Section des informations du profil -->
    <section class="profil">
        <h1>Mon Profil : </h1>
        <p><strong>Email :</strong> <span id="user-email"></span></p>
        <p><strong>Pseudo :</strong> <span id="user-pseudo"></span></p>
        <p><strong>Date d'inscription :</strong> <span id="user-date"></span></p>
        <!-- Supprimer son compte -->
        <button id="supprimer-compte" class="btn-danger">Supprimer mon compte</button>
        <!-- Liste des annonces de l'utilisateur -->
        <h2>Mes Annonces : </h2>
        <div id="annonce-details"></div>
    </section>

</template>

<style scoped>
/* Styles pour la page de profil */
.profil {
    padding: 50px 0;
    background-color: #f9f9f9;
    text-align: center;
}

.profil-card {
    display: inline-block;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
}

.profil h2,
h3 {
    text-align: center;
}

.profil p {
    font-size: 18px;
    margin: 10px 0;
}

.profil p strong {
    color: #0056b3;
}

.profil span {
    color: #333;
}

.profil button {
    display: inline-block;
    padding: 12px 30px;
    background-color: #ad1328;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.6s;

}
</style>