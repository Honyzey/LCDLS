import { createRouter, createWebHistory } from 'vue-router';
import { isAuthenticated } from '../services/auth';

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import('../views/Accueil.vue')
  },
  {
    path: '/annonce',
    name: 'Annonce',
    component: () => import('../views/Annonce.vue')
  },
  {
    path: '/annonce/creation',
    name: 'Creation Annonce',
    component: () => import('../views/AnnonceCreation.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/Profil.vue')
  },
  {
    path: '/mentions-legales',
    name: 'Mentions Légales',
    component: () => import('../views/MentionLegal.vue')
  },
  {
    path: '/confidentialite',
    name: 'Politique de confidentialité',
    component: () => import('../views/Confidentialite.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import('../views/Connexion.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/connexion'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = isAuthenticated();

  if (authRequired && !loggedIn) {
    return next('/connexion');
  }

  next();
});


export default router;
