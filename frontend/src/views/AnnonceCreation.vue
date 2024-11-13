<template>
    <section class="creer-annonce">
        <div class="container">
            <h2>Créer une annonce</h2>
            <form @submit.prevent="submitAnnonce">
                <div class="form-group">
                    <label for="titre">Titre de l'annonce :</label>
                    <input type="text" id="titre" v-model="titre" placeholder="Ex: Manuel de Mathématiques" required>
                </div>

                <div class="form-group">
                    <label for="categorie">Catégorie :</label>
                    <select id="categorie" v-model="categorie" required>
                        <option value="Fournitures Scolaires">Fournitures Scolaires</option>
                        <option value="Matériel Scolaire">Matériel Scolaire</option>
                        <option value="Livre">Livre</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="etat">État :</label>
                    <select id="etat" v-model="etat" required>
                        <option value="Neuf">Neuf</option>
                        <option value="Très bon">Très bon</option>
                        <option value="Bon">Bon</option>
                        <option value="Usagé">Usagé</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="prix">Prix (en €) :</label>
                    <input type="number" id="prix" v-model="prix" placeholder="Ex: 20" required>
                </div>

                <div class="form-group">
                    <label for="description">Description :</label>
                    <textarea id="description" v-model="description" rows="4" placeholder="Décrivez l'article..."
                        required></textarea>
                </div>

                <div class="form-group">
                    <label for="image" class="custom-file-upload">
                        <i class="fa fa-cloud-upload-alt"></i> Ajouter des images
                    </label>
                    <input type="file" id="image" @change="handleImageUpload" accept="image/*" multiple>
                    <span id="file-count" style="margin-left: 10px; font-size: 14px; color: #555;">Aucun fichier
                        sélectionné</span>
                    <div id="image-preview-container" style="display: flex; gap: 10px; margin-top: 10px;">
                        <img v-for="image in imagePreviews" :src="image" :key="image"
                            style="max-width: 100px; max-height: 100px; border-radius: 8px;">
                    </div>
                </div>

                <button type="submit" class="btn">Poster l'annonce</button>
            </form>
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
/* Styles pour la page de création d'annonce */
.creer-annonce {
    padding: 60px 20px;
    background-color: #f4f4f4;
    text-align: center;
}

.creer-annonce .container {
    background-color: white;
    max-width: 600px;
    margin: 0 auto;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.creer-annonce h2 {
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 600;
    color: #2980B9;
}

.form-group {
    margin-bottom: 20px;
    text-align: left;
}

.form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 10px;
    color: #2980B9;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #2980B9;
    border-radius: 5px;
    box-sizing: border-box;
}

.custom-file-upload {
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #2980B9;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.custom-file-upload:hover {
    background-color: #1e6391;
}

input[type="file"] {
    display: none;
}

textarea {
    resize: vertical;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    background-color: #2980B9;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.6s;
}

.btn:hover {
    background-color: #1e6391;
}
</style>