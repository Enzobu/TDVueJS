<template>
    <div class="mt-5">
        <div class="row justify-content-center">
            <div class="col-sm-5">
                <span v-if="state === 1" class="badge text-bg-success mb-3">Message envoyé avec succès</span>
                <form @submit.prevent="submitForm">
                    <div>
                        <label class="form-label" for="name">Nom:</label>
                        <input class="form-control" type="text" id="name" v-model="formData.name" required />
                    </div>
                    <div class="my-3">
                        <label class="form-label justify-content-start" for="email">Email:</label>
                        <input class="form-control" type="email" id="email" v-model="formData.email" required />
                    </div>
                    <div>
                        <label class="form-label" for="message">Message:</label>
                        <textarea class="form-control" id="message" v-model="formData.message" required></textarea>
                    </div>
                    <div class="row d-flex align-items-center">
                        <div class="col-sm-2">
                            <button class="btn btn-primary mt-4" type="submit">Envoyer</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
      state: 0, // Initialisation de la variable state
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch(
          'https://discord.com/api/webhooks/1182481776015331368/bqTIG__3a9Qeibkq0bXC13eaej0D6VZR1Eeqc_W1YNu69LkC2dCNVbhS9A6yUiHCFpet',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              content: `Nom: ${this.formData.name}\nEmail: ${this.formData.email}\nMessage: ${this.formData.message}`,
            }),
          }
        );

        if (response.ok) {
          this.state = 1; // Changement d'état en cas de succès
          this.formData = {
            name: '',
            email: '',
            message: '',
          };
        } else {
          this.state = 0; // Changement d'état en cas d'échec
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire', error);
      }
    },
  },
};
</script>
  