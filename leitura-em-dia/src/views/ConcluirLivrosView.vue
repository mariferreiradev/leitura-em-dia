<template>
    <div class="livros-concluidos">
        <h1>Concluir Livros</h1>
        <div class="livros">
            <span>Logica de programação</span>
            <p>Pág: <span>33</span> / <span>105</span></p>
            <button class="btn-concluir">Concluir</button>
        </div>
        <div class="livros">
            <span>Logica de programação</span>
            <p>Pág: <span>33</span> / <span>105</span></p>
            <button class="btn-concluir">Concluir</button>
        </div>
    </div>
</template>

<style scoped>
    .livros-concluidos{
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    h1 {
        font-size: 30px;
        text-align: center;
        color: #ff4c6d;
    }

    p {
        color: #ff4c6d;
    }

    .livros{
        font-size: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        padding: 20px;
    }

    .btn-concluir {
    font-size: 15px;
    color: #ffff;
    background-color: #00c2cb;
    border: 1px solid #00c2cb;
    border-radius: 25px;
    padding: 6px 12px;
    cursor: pointer;
  }

  .btn-concluir:hover {
    color: #ffff;
    border: 1px solid #ff4c6d;
    background-color: #ff4c6d;
    border-radius: 25px;
    transition: 0.4s;
}
</style>