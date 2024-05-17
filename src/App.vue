<template>
  <v-app>
    <AppNavBar v-if="$route.name !== '/[...path]' && $route.path !== '/login' && $route.path !== '/daftar' && $route.path !== '/forgot-password'" />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter v-if="!['/login', '/daftar', '/forgot-password'].includes($route.path)" />
  </v-app>
</template>

<script setup>
  // ...
</script>