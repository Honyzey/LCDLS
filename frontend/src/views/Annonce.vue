<template>
    <section class="annonce">
        <div class="container">
            <h2>Liste des annonces</h2>
            <form id="search-form" @submit.prevent="searchAnnonces">
                <input type="text" id="search-bar" v-model="query" placeholder="Rechercher par titre..." />
                <button type="submit">Rechercher</button>
                <button type="button" class="toggle-filters" @click="toggleFilters">Filtres</button>
            </form>
            <div id="filters-section" v-if="showFilters">
                <select v-model="selectedCategorie">
                    <option value="">Toutes les catégories</option>
                    <option v-for="categorie in categories" :key="categorie.id" :value="categorie.id">
                        {{ categorie.name }}
                    </option>
                </select>
            </div>
            <div class="annonces-container">
                <AnnonceCard v-for="annonce in filteredAnnonces" :key="annonce.id" :annonce="annonce" />
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import AnnonceCard from '../components/AnnonceCard.vue';

export default {
    components: {
        AnnonceCard
    },
    data() {
        return {
            annonces: [],
            categories: [],
            query: '',
            selectedCategorie: '',
            showFilters: false
        };
    },
    computed: {
        filteredAnnonces() {
            return this.annonces.filter(annonce => {
                return (
                    (this.query === '' || annonce.title.toLowerCase().includes(this.query.toLowerCase())) &&
                    (this.selectedCategorie === '' || annonce.categorie_id === parseInt(this.selectedCategorie))
                );
            });
        }
    },
    methods: {
        async fetchAnnonces() {
            try {
                const response = await axios.get('http://localhost:3000/annonces/all');
                this.annonces = response.data;
            } catch (error) {
                console.error('Erreur lors de la récupération des annonces:', error);
            }
        },
        async fetchCategories() {
            try {
                const response = await axios.get('http://localhost:3000/annonces/categories');
                this.categories = response.data;
            } catch (error) {
                console.error('Erreur lors de la récupération des catégories:', error);
            }
        },
        searchAnnonces() {
            // La recherche est gérée par la computed property filteredAnnonces
        },
        toggleFilters() {
            this.showFilters = !this.showFilters;
        }
    },
    mounted() {
        this.fetchAnnonces();
        this.fetchCategories();
    }
};
</script>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.container h2 {
    font-size: 28px;
    margin-bottom: 20px;
    text-align: center;
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

#search-bar {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-right: 10px;
}

#search-bar:focus {
    border-color: #0056b3;
    outline: none;
}

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

#filters-section {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.annonces-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>