<template>
    <div class="row justify-content-center d-flex my-4">
        <div class="col-sm-5">
            <form @submit.prevent="submitForm" class="form-group mt-4">
                <div id="school_fields">
                    <p>
                        <label for="url">URL :</label>
                        <input type="text" id="url" name="url" class="form-control" v-model="formData.url" required>
                    </p>
                    <p>
                        <label for="method">Méthode :</label>
                        <select v-model="formData.method" id="method" class="form-select" required>
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                        </select>
                    </p>
                    <p>
                        <label for="parameters">Paramètres</label>
                        <input type="text" id="parameters" name="parameters" class="form-control" v-model="formData.parameters">
                    </p>
                </div>
                <button class="btn btn-primary mt-2" type="submit">Valider</button>
            </form>
        </div>
    </div>
    <div class="row justify-content-center d-flex my-5 api-response mb-5" v-if="apiResponse">
        <div class="col-5">
            <div class="row mb-4">Résultat :</div>
            <div class="row border border-dark-subtle rounded p-1 overflow-y-scroll response mb-5"><pre>{{ formattedResponse }}</pre></div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            formData: {
                url: '',
                method: 'GET',
                parameters: '',
            },
            apiResponse: null,
        };
    },
    computed: {
    formattedResponse() {
        // Formatez la réponse de l'API pour l'afficher de manière lisible
        return JSON.stringify(this.apiResponse, null, 2);
        },
    },
    methods: {
        async submitForm() {
            try {
                const response = await fetch(this.formData.url, {
                    method: this.formData.method,
                    headers: {
                        'Content-Type': 'application/json',
                        // Ajoutez d'autres en-têtes si nécessaire
                    },
                    // Ajoutez le corps de la requête pour les méthodes autres que GET
                    body: this.formData.method === 'GET' ? null : JSON.stringify({}),
                });

                const data = await response.json();
                this.apiResponse = data;
            } catch (error) {
                console.error('Erreur lors de la requête API :', error);
                this.apiResponse = `L'API n'a rien retournée. (Erreur : ${error}). Vérifiez vos champs`;
            }
        },
    },
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