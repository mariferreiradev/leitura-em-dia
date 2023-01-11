<script>

</script>

<template>
  <main>
    <div class="opcoes">
      <img src="../../public/img/icone-add-pag.webp" alt="Páginas de livro" width="56" height="41">
      <a href="">
        <button>Adicionar página</button>
      </a>
    </div>
    <div class="opcoes">
      <img src="../../public/img/icone-concluir-livros.webp" alt="Livro concluído" width="42" height="61">
      <a href="">
        <button>Concluir livro</button>
      </a>
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

.opcoes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.opcoes button {
  font-size: 15px;
  color: #ffff;
  background-color: #00c2cb;
  border: none;
  border-radius: 25px;
  padding: 6px 10px;
}

</style>
