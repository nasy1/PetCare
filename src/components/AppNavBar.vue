<template>
  <v-app-bar app color="white" dark class="px-16 custom-navbar" elevation="0">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/PetCare!.png"
        transition="scale-transition"
        width="260"
        @click="$router.push('/')"
        style="cursor: pointer;"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn variant="plain" to="/">Home</v-btn>
    <v-btn variant="plain" to="/grooming">Grooming</v-btn>
    <v-btn variant="plain" to="/petshop">Petshop</v-btn>
    <v-btn variant="plain" to="/dokter">Dokter</v-btn>
    <v-btn variant="plain" to="/tentang_kami">Tentang Kami</v-btn>

    <v-spacer></v-spacer>

    <v-col cols="auto">
      <v-btn to="/login" size="large" rounded="lg" class="mr-4" variant="outlined" color="#8FD0C6">Masuk</v-btn>
      <v-btn to="/daftar" size="large" rounded="lg" variant="flat" color="secondary">Daftar</v-btn>

      <!-- Buat Login
      <template v-if="isLoggedIn">
        <v-btn size="large" rounded="lg" variant="outlined" color="#8FD0C6">{{ username }}</v-btn>
      </template>
      <template v-else>
        <v-btn to="/login" size="large" rounded="lg" class="mr-4" variant="outlined" color="#8FD0C6">Masuk</v-btn>
        <v-btn to="/daftar" size="large" rounded="lg" variant="flat" color="secondary">Daftar</v-btn>
      </template>
      -->

    </v-col>
  </v-app-bar>
</template>

<script setup>
/*
import { ref, computed } from 'vue';

const isLoggedIn = ref(true);
const username = ref('User123');
*/
</script>

<style scoped>
.custom-navbar {
  background-color: rgba(242, 245, 250, 255) !important;
  padding-top: 20px;
  padding-bottom: 20px;
}

.v-btn {
  font-family: "Mochiy Pop One", sans-serif;
  text-transform: none;
  color: #9bb1d6;
}

.v-btn--variant-outlined {
  border: 2px solid currentColor;
}

.bg-secondary {
  --v-theme-overlay-multiplier: var(--v-theme-secondary-overlay-multiplier);
  background-color: #8FD0C6 !important;
  color: rgb(var(--v-theme-on-secondary)) !important;
}
</style>
