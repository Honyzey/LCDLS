<template>
    <section class="profil">
        <h1>Profil de l'utilisateur : </h1>
        <p><strong>Email :</strong> <span id="user-email">{{ user.mail }}</span></p>
        <p><strong>Pseudo :</strong> <span id="user-pseudo">{{ user.identifiant }}</span></p>
        <p><strong>Date d'inscription :</strong> <span id="user-date">{{ user.inscription_date }}</span></p>
        <p><strong>Dernière connexion :</strong> <span id="user-date">{{ user.last_connexion }}</span></p>
        <h2>Ses Annonces : </h2>
        <div id="annonce-details">
            <ul>
                <li v-for="annonce in user.Annonces" :key="annonce.id">
                    {{ annonce.title }} - {{ annonce.categorie }} - {{ annonce.prix }}€
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: {
                mail: '',
                identifiant: '',
                inscription_date: '',
                Annonces: [],
            },
        };
    },
    async created() {
        const userId = this.$route.params.id;
        try {
            const response = await axios.get(`http://localhost:3000/users/${userId}`);
            this.user = response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
        }
    }
};
</script>

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

.profil button.btn-secondary {
    background-color: #6c757d;
    margin-left: 10px;
}

.profil button:hover {
    background-color: #0056b3;
}
</style>