<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Logo leitura em dia" class="logo" src="./assets/logo-leitura-em-dia.webp" width="100" height="70" />
  </header>
  <RouterView />
  <aside>
    <nav>
      <div class="perfil">
        <div>
          <img src="./assets/profile-img.webp" alt="Foto do usuário" width="80" height="80">
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
    </nav>
    <div class="menu">
      <img alt="Abrir menu" src="./assets/icone-sidebar-fechada.webp" width="50" height="50">
    </div>
  </aside>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
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
  gap: 10px;
}
.btn-perfil {
  font-size: 15px;
  background-color: transparent;
  border: 1px solid #00c2cb;
  border-radius: 7px;
  padding: 6px 8px;
}
.menu{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 25px 0;
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
