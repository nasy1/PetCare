<template>
  <v-app>
    <AppNavBar v-if="$route.name !== '/[...path]' && $route.path !== '/login' && $route.path !== '/daftar' && $route.path !== '/forgot-password'" 
      :class="{ 'white-navbar': isPetshopPage }"/>
    <v-main>
      <router-view />
    </v-main>
    <AppFooter v-if="!['/login', '/daftar', '/forgot-password'].includes($route.path)" />
  </v-app>
</template>

<script>
  // ...
  import router from './router';
  export default {
  computed: {
    isPetshopPage() {
      return this.$route.path === '/petshop';
    },
  },
};
</script>

<style scoped>
  .white-navbar {
  background-color: white !important;
}
</style>