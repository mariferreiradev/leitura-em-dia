<script>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div class="options">
      <img src="../../public/img/add-livro.webp" alt="Lista de desejos" width="49" height="49">
      <RouterLink class="btn-main" to="/add-livros">Adicionar Livros</RouterLink>
    </div>
    <div class="options">
      <img src="../../public/img/icone-add-pag.webp" alt="Páginas de livro" width="56" height="41">
      <RouterLink class="btn-main" to="/add-paginas">Adicionar páginas</RouterLink>
    </div>
    <div class="options">
      <img src="../../public/img/concluir-livro.png" alt="Livro concluído" width="60" height="60">
      <RouterLink class="btn-main" to="/concluir-livros">Concluir livros</RouterLink>
    </div>
    <div class="options">
      <img src="../../public/img/lista-de-desejos.png" alt="Lista de desejos" width="50" height="50">
      <RouterLink class="btn-main" to="/lista-de-desejos">Lista de desejos</RouterLink>
    </div>
  </main>
</template>

<style scoped>

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }

  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  .btn-main {
    font-size: 15px;
    color: #ffff;
    background-color: #00c2cb;
    border: 1px solid #00c2cb;
    border-radius: 25px;
    padding: 6px 12px;
    cursor: pointer;
  }

  .btn-main:hover {
    color: #ffff;
    border: 1px solid #ff4c6d;
    background-color: #ff4c6d;
    border-radius: 25px;
    transition: 0.4s;
}

</style>
