<template>
    <section class="details-annonce">
        <div id="annonce-details" v-if="annonce">
            <div class="image-container">
                <button class="nav-button left" @click="changeImage(-1)">&#10094;</button>
                <img :src="'data:image/jpeg;base64,' + annonce.Images[currentImageIndex].image_base64"
                    id="current-image" />
                <button class="nav-button right" @click="changeImage(1)">&#10095;</button>
            </div>

            <h2>{{ annonce.title }}</h2>
            <p><strong>Catégorie :</strong> {{ annonce.Categorie.name }}</p>
            <p><strong>Description :</strong> {{ annonce.description }}</p>
            <p><strong>État :</strong> {{ annonce.etat }}</p>
            <p><strong>Prix :</strong> {{ annonce.prix }} €</p>
            <p><strong>Date de publication :</strong> {{ annonce.creation_date }}</p>
            <button id="contact-vendeur-btn">Contacter le vendeur</button>
            <button id="report">Signaler l'annonce</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            annonce: null,
            currentImageIndex: 0
        };
    },
    async created() {
        const id = this.$route.params.id;
        try {
            const response = await axios.get(`http://localhost:3000/annonces/${id}`);
            this.annonce = response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'annonce:', error);
        }
    },
    methods: {
        changeImage(direction) {
            const totalImages = this.annonce.Images.length;
            this.currentImageIndex = (this.currentImageIndex + direction + totalImages) % totalImages;
        }
    }
};
</script>

<style scoped>
/* Styles pour les détails de l'annonce */
.details-annonce {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

#annonce-details img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
}

#annonce-details h2 {
    font-size: 27px;
    margin-bottom: 50px;
    text-align: center;
    color: #333;
}

#annonce-details p {
    font-size: 16px;
    margin-bottom: 10px;
    color: #666;
}

.image-container {
    position: relative;
}

/* Styles pour les boutons de navigation */
.nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: #2980B9;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.nav-button:hover {
    background-color: #1e6391;
}

.nav-button.left {
    left: -20px;
    /* Positionne le bouton gauche légèrement à gauche de l'image */
}

.nav-button.right {
    right: -20px;
    /* Positionne le bouton droit légèrement à droite de l'image */
}

button {
    width: 100%;
    padding: 12px;
    background-color: #2980B9;
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

button:hover {
    background-color: #1e6391;
}
</style>