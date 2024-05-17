<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="6">
        <v-row justify="center">
          <v-img alt="Vuetify Logo" class="center-image mb-4" src="@/assets/PetCare!.png" width="100px"
            max-width="350px" @click="$router.push('/')" style="cursor: pointer;" />
        </v-row>

        <v-card>
          <v-window>
            <v-card text variant="outlined" color="#9BB1D6" style="font-family: 'poppins', sans-serif;">
              <v-row justify="center">
                <v-col cols="12" sm="11" md="11" class="py-10">
                  <v-form @submit.prevent="submitForm" v-model="valid">
                    <v-alert class="mb-3" type="error" v-if="alertError" dismissible @click="alertError = false">
                      {{ errorMessage }}
                    </v-alert>
                    <v-label class="text-p pb-4">Email</v-label>
                    <v-text-field variant="outlined" v-model="email" :rules="[rules.required, rules.email]" id="email"
                      name="email" type="email"></v-text-field>

                    <v-label class="text-p pb-4">Password</v-label>
                    <v-text-field variant="outlined" v-model="password" :rules="[rules.required]" id="password"
                      name="password" type="password"></v-text-field>

                    <div style="display: flex; justify-content: flex-end;">
                      <router-link to="/forgot-password"
                        style="text-decoration: none; color:#9BB1D6; font-weight: 300;">Lupa Password?</router-link>
                    </div>
                    <v-btn block size="large" rounded="lg" class="my-4" variant="flat" color="#9BB1D6"
                      style="color: white; text-transform: none;" type="submit" :disabled="!valid || loading"
                      :loading="loading">Login</v-btn>

                    <div style="display: flex; justify-content: center;">
                      <router-link to="/daftar" style="text-decoration: none; color:#9BB1D6; font-weight: 300;">Tidak
                        punya akun? Klik disini!</router-link>
                    </div>
                  </v-form>
                </v-col>
              </v-row>
            </v-card text>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>


</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      valid: true,
      email: '',
      password: '',
      loading: false,
      errorMessage: '',
      alertError: false,
      rules: {
        required: value => !!value || 'Harus diisi',
        email: value => /.+@.+\..+/.test(value) || 'Invalid email',
      },
    };
  },
  methods: {
    submitForm() {
      this.loading = true;

      axios.post('http://localhost:8000/api/login', {
        email: this.email,
        password: this.password,
      })
        .then(response => {
          this.loading = false;
          // Store the token
          localStorage.setItem('authToken', response.data.token);
          // Redirect to the main page
          this.$router.push('/');
        })
        .catch(error => {
          this.loading = false;
          // Show an error message
          if (error.response && error.response.data && error.response.data.error) {
            this.errorMessage = error.response.data.error;
          } else {
            this.errorMessage = 'An error occurred. Please try again.';
          }
          this.alertError = true;
        });
    },
  },
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
