
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
})


router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    document.title = "404 Not Found";
  } else {
    // Get the last part of the path as the title
    const title = to.path.split('/').pop();
    document.title = title.charAt(0).toUpperCase() + title.slice(1) || 'Home';
  }
  next();
});

export default router


