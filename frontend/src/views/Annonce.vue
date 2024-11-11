<script setup>

</script>

<template>

    <section class="Annonce">

    </section>

</template>

<style scoped>
.container {
    max-width: 1200px;
    /* Limite la largeur maximale du conteneur */
    margin: 0 auto;
    /* Centre le conteneur */
}


.container h2 {
    font-size: 28px;
    margin-bottom: 20px;
    text-align: center;
    max-width: 300px;
}

.container p {
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
}

.container img {
    display: flex;
    max-width: 300px;
    max-height: 300px;
    border-radius: 8px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}



/* Style du conteneur du formulaire de recherche */

#filters-section {
    display: flex;
}

#search-form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    padding: 10px;
    max-width: 600px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


/* Style du champ de recherche */
#search-bar {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-right: 10px;
    width: 400px;
}

#search-bar:focus {
    border-color: #0056b3;
    outline: none;
}

/* Style du bouton de recherche */
button[type="submit"],
.toggle-filters {
    background-color: #2980B9;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: 10px;
}

button[type="submit"]:hover,
.toggle-filters:hover {
    background-color: #1e6391;
}



/* Style pour la section des filtres */


/* Par défaut, on masque la section des filtres */
#filters-section {
    display: none;
    /* Masquer les filtres par défaut */
    justify-content: center;
    /* Centrer les filtres */
}

/* Quand on clique sur le bouton, les filtres s'affichent */
.filters-visible #filters-section {
    display: flex;
    /* Afficher les filtres quand le bouton est cliqué */
    justify-content: center;
    /* Toujours centrer les filtres */
}
</style>