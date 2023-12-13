<template>
    <div class="mt-5">
        <div class="row justify-content-center">
            <div class="col-sm-5">
                <form @submit.prevent="submitForm" class="form-group mt-4">
                    <div id="school_fields">
                        <div>
                            <label class="form-label" for="url">URL :</label>
                            <input type="text" id="url" name="url" class="form-control" v-model="formData.url" required>
                        </div>
                        <div class="my-3">
                            <label class="form-label" for="method">Méthode :</label>
                            <select v-model="formData.method" id="method" class="form-select" required>
                                <option value="GET">GET</option>
                                <option value="POST">POST</option>
                            </select>
                        </div>
                        <div>
                            <label class="form-label" for="parameters">Paramètres</label>
                            <input type="text" id="parameters" name="parameters" class="form-control"
                                v-model="formData.parameters">
                        </div>
                    </div>
                    <button class="btn btn-primary mt-4" type="submit">Valider</button>
                </form>
            </div>
        </div>
        <div class="row justify-content-center d-flex my-5 api-response mb-5" v-if="apiResponse">
            <div class="col-5">
                <div class="row mb-6">Résultat :</div>
                <pre class="row border border-dark-subtle rounded p-1 response mb-5">{{ formattedResponse }}</pre>
            </div>
        </div>  
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            formData: {
                method: 'GET',
                url: '',
                parameters: {
                    siret: 79317749400028,
                }
            }, 
            apiResponse: null
        };
    },
    computed: {
                formattedResponse() {
                    // Formatez la réponse de l'API pour l'afficher de manière lisible
                    return JSON.stringify(this.apiResponse, null, 2);
                },
            },
    methods: {
        submitForm() {
            this.fetchData();
        },
        fetchData() {
            axios({
                method: this.formData.method,
                url: this.formData.url,
                data: {
                    siret: 79317749400028,
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    this.apiResponse = response.data;
                })
                .catch(error => {
                    this.apiResponse = `L'API n'a rien retourné. (Erreur : ${error}). Vérifiez vos champs`;
                });
        }
    },
    mounted() {
        // Vous pouvez appeler fetchData ici si vous voulez effectuer la requête au moment du montage
    }
};
</script>

<style>
.api-response {
    max-height: 50vh;

    & .response {
        max-height: 50vh;
    }
}
</style>