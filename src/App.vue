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
      },

      goBacktoHome() {
        this.$router.push('/');
      },
    }
  }
</script>

<template>
  <div class="content-app" :class="{'disable-scroll': !sidebarOpen}">
    <header>
      <img :class="{hidden: homePage}" v-on:click="goBacktoHome()" alt="Logo leitura em dia" class="logo" src="./assets/logo-leitura-em-dia.webp" width="100" height="75" />
      <div class="menu">
        <img :class="{hidden: homePage}" v-on:click="toggleSidebar()" alt="Abrir menu" src="./assets/icone-sidebar-fechada.webp" width="50" height="50">
      </div>
      <aside :class="{hidden: sidebarOpen}">
        <nav>
          <div class="profile">
            <div>
              <img src="./assets/profile-img.webp" alt="Foto do usuário" width="100" height="100">
            </div>
            <span>Usuário</span>
          </div>
          <div class="sidebar">
            <RouterLink class="btn-sidebar" v-on:click="toggleSidebar()" to="/">Home</RouterLink>
            <RouterLink class="btn-sidebar" v-on:click="toggleSidebar()" to="/perfil">Perfil</RouterLink>
            <RouterLink class="btn-sidebar" v-on:click="toggleSidebar()" to="/seus-livros">Seus livros</RouterLink>
            <RouterLink class="btn-sidebar" v-on:click="toggleSidebar()" to="/estatisticas">Estatísticas</RouterLink>
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
      <div class="contact">
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

.content-app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
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

.profile img {
  border-radius: 100%;
}

.profile span {
  font-weight: 700;
  font-size: 20px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn-sidebar {
  text-align: center;
  color: #ffff;
  font-size: 15px;
  background-color: #00c2cb;
  border: 1px solid #00c2cb;
  border-radius: 25px;
  padding: 6px 12px;
}

.btn-sidebar:hover {
  color: #ffff;
  background-color: #ff4c6d;
  border: 1px solid #ff4c6d;
}

.btn-sidebar:active {
  color: #ffff;
  border: 1px solid #ff4c6d;
  background-color: #ff4c6d;
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

.contact {
  display: flex;
  gap: 10px;
}

nav a.router-link-exact-active {
  color: #ffff;
  border: 1px solid #ff4c6d;
  background-color: #ff4c6d;
}

.hidden {
  display: none;
}

.disable-scroll {
  overflow-y: hidden;
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

}
</style>
