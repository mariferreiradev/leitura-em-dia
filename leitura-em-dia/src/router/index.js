import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PerfilView from '../views/PerfilView.vue'
import SeusLivrosView from '../views/SeusLivrosView.vue'
import EstatisticasView from '../views/EstatisticasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path:'/perfil',
      name: 'perfil',
      component: PerfilView
    },

    {
      path:'/seus-livros',
      name: 'seus-livros',
      component: SeusLivrosView
    },

    {
      path:'/estatisticas',
      name: 'estatisticas',
      component: EstatisticasView
    }
  ]
})

export default router
