<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="7" md="6">
        <v-row justify="center">
          <v-img alt="Vuetify Logo" class="center-image mb-4" src="@/assets/PetCare!.png" width="80px" max-width="300px"
            @click="$router.push('/')" style="cursor: pointer;" />
        </v-row>
        <v-card>
          <v-window>
            <v-card text variant="outlined" color="#9BB1D6" style="font-family: 'poppins', sans-serif;">
              <v-row justify="center">
                <v-col cols="10" sm="10" md="10" class="py-8">
                  <v-form @submit.prevent="submitForm" v-model="valid">
                    <v-alert class="mb-3" type="success" v-if="alertSuccess" dismissible @click="alertSuccess = false">
                      Registrasi berhasil, Silahkan login
                    </v-alert>
                    <v-alert class="mb-3" type="error" v-if="alertError" dismissible @click="alertError = false">
                      {{ errorMessage }}
                    </v-alert>
                    <v-label class="text-p pb-3">Nama Lengkap</v-label>
                    <v-text-field variant="outlined" v-model="username" :rules="[rules.required]" name="username"
                      type="text"></v-text-field>

                    <v-label class="text-p pb-3">Email</v-label>
                    <v-text-field variant="outlined" v-model="email" :rules="[rules.required, rules.email]" id="Email"
                      name="Email" type="text"></v-text-field>

                    <v-label class="text-p pb-3">Nomor Whatsapp Aktif</v-label>
                    <v-text-field variant="outlined" v-model="phone" :rules="[rules.required]" name="NoTelp"
                      type="text"></v-text-field>

                    <v-label class="text-p pb-3">Password</v-label>
                    <v-text-field variant="outlined" v-model="password" :rules="[rules.required]" id="password"
                      name="password" type="password"></v-text-field>

                    <v-btn block size="large" rounded="lg" class="mb-4" variant="flat" color="#9BB1D6"
                      style="color: white; text-transform: none;" type="submit" :disabled="!valid || loading"
                      :loading="loading">Daftar</v-btn>
                    <router-link :to="'/login'" style="text-decoration: none;">
                      <v-btn block size="large" rounded="lg" class="mr-4" variant="text" color="#9BB1D6"
                        style="color: #9BB1D6; text-transform: none; font-weight: 300;">Sudah punya akun? Klik
                        disini!</v-btn>
                    </router-link>
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

<style scoped>
.fill-height {
  height: 90vh;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      valid: true,
      username: '',
      email: '',
      phone: '',
      password: '',
      alertSuccess: false,
      alertError: false,
      errorMessage: '',
      loading: false,
      rules: {
        required: value => !!value || 'Harus diisi',
        email: value => /.+@.+\..+/.test(value) || 'Format salah',
      },
    };
  },
  methods: {
    submitForm() {
      // Reset alert state
      this.alertSuccess = false;
      this.alertError = false;
      this.errorMessage = '';
      // loading
      this.loading = true;

      axios.post('http://localhost:8000/api/register', {
        username: this.username,
        email: this.email,
        phone: this.phone,
        password: this.password,
      })
        .then(response => {
          this.loading = false;
          this.alertSuccess = true;
          console.log(response.data);
        })
        .catch(error => {
          this.loading = false;
          if (error.response) {
            // Show an alert with the error message
            this.errorMessage = error.response.data.error;
            this.alertError = true;
          } else {
            this.alertError = true;
          }
          console.log(error);
        });
    },
  },
};
</script>