<template>

    <section class="banner">
        <div class="banner-content">
            <h1>Bienvenue sur Le Coin DLS</h1>
            <p>Achetez et vendez vos manuels et fournitures scolaires facilement.</p>
            <form id="search-form" onsubmit="return rechercherAnnonces(event)">
              <input type="text" id="search-bar" name="query" placeholder="Rechercher une annonce...">
              <button type="submit">Rechercher</button>
            </form>  
        </div>
    </section>

</template>

<style scoped>
/* Styles pour la page d'accueil */
.banner {
    background-color: #2980B9;
    color: white;
    text-align: center;
    padding: 50px 20px;
}

.banner h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

.banner p {
    font-size: 18px;
    margin-bottom: 35px;
}

/* Style du conteneur du formulaire de recherche */
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
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s ease;
}

#search-bar:focus {
    border-color: #0056b3;
    outline: none;
}

/* Style du bouton de recherche */
button[type="submit"] {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #2980B9;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-left: 10px;
    transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
    background-color: #1e6391;
}

/* Style du champ de recherche */
#search-bar {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s ease;
}

#search-bar:focus {
    border-color: #0056b3;
    outline: none;
}

/* Style du bouton de recherche */
button[type="submit"] {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #2980B9;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-left: 10px;
    transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
    background-color: #1e6391;
}
</style>