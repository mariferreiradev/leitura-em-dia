<script>
  import { RouterLink, RouterView } from 'vue-router'
  export default {
    data: () => ({
      sidebarOpen: true,
      homePage: false,
    }),

    methods: {
      toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen
        this.homePage = !this.homePage
      }
    }
  }
</script>

<template>
  <div class="conteudo-app">
    <header>
      <img :class="{hidden: homePage}" alt="Logo leitura em dia" class="logo" src="./assets/logo-leitura-em-dia.webp" width="100" height="70" />
      <div class="menu">
        <img :class="{hidden: homePage}" v-on:click="toggleSidebar()" alt="Abrir menu" src="./assets/icone-sidebar-fechada.webp" width="50" height="50">
      </div>
      <aside :class="{hidden: sidebarOpen}">
        <nav>
          <div class="perfil">
            <div>
              <img src="./assets/profile-img.webp" alt="Foto do usuário" width="100" height="100">
            </div>
            <span>Usuário</span>
          </div>
          <div class="btn-sidebar">
            <button class="btn-perfil">
              <RouterLink to="/">Perfil</RouterLink>
            </button>
            <button class="btn-perfil">
              <RouterLink to="/">Seus livros</RouterLink>
            </button>
            <button class="btn-perfil">
              <RouterLink to="/">Estatísticas</RouterLink>
            </button>
          </div>
          <div class="menu">
            <img v-on:click="toggleSidebar()" alt="Abrir menu" src="./assets/icone-sidebar-aberta.webp" width="50" height="50">
          </div>
        </nav>
      </aside>
    </header>
    <RouterView :class="{hidden: homePage}" />
    <footer :class="{hidden: homePage}">
      <p>Desenvolvido por Mariana Ferreira</p>
      <div class="contato">
        <a href="https://github.com/mariferreiradev" target="_blank">
          <img src="./assets/icon-github.webp" alt="Icone Github" width="35" height="35">
        </a>
        <a href="https://www.linkedin.com/in/mariferreiradev/" target="_blank">
          <img src="./assets/icon-linkedin.webp" alt="Icone Linkedin" width="35" height="35">
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>

.conteudo-app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
}

.logo {
  display: block;
}

aside {
  width: 100%;
  display: flex;
  flex-direction: column;
}

nav {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  text-align: center;
  padding: 2rem;
}

.perfil img {
  border-radius: 100%;
}

.perfil span {
  font-weight: 700;
  font-size: 20px;
}

.btn-sidebar {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn-perfil {
  font-size: 15px;
  background-color: transparent;
  border: 1px solid #00c2cb;
  border-radius: 7px;
  padding: 6px 10px;
}

.menu{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  bottom: 0;
  padding: 2rem;
}

footer p {
  font-size: 12px;
  text-align: center;
}

.contato {
  display: flex;
  gap: 10px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}

.hidden {
  display: none;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
