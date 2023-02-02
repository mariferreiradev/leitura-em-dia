<template>
    <div class="finished-books">
        <h1>Concluir Livros</h1>
        <div class="books">
            <span>Logica de programação</span>
            <p>Pág: <span>33</span> / <span>105</span></p>
            <button class="btn-finish">Concluir</button>
        </div>
        <div class="books">
            <span>Logica de programação</span>
            <p>Pág: <span>33</span> / <span>105</span></p>
            <button class="btn-finish">Concluir</button>
        </div>
    </div>
    <div class="evaluate">
        <div class="evaluation">
            <p>Deseja avaliar esse livro?</p>
            <div class="btn-choose">
                <button>Sim</button>
                <button>Não</button>
            </div>
            <div class="grade">
                <label>Nota de 1.0 a 5.0:</label>
                <input type="number" placeholder="Digite sua nota...">
                <button class="btn-save">Salvar</button>
            </div>
        </div>
        <div class="add-review">
            <p>Deseja escrever uma resenha sobre o livro?</p>
            <div class="btn-choose">
                <button>Sim</button>
                <button>Não</button>
            </div>
            <div class="review">
                <label for="">Escreva uma resenha breve de até 800 caracteres:</label>
                <textarea name="" id="" rows="10" maxlength="800" placeholder="Escreva sua resenha..."></textarea>
                <button class="btn-save">Salvar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .finished-books{
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

    .books{
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

    .btn-finish, .btn-save, .btn-choose button {
        font-size: 15px;
        color: #ffff;
        background-color: #00c2cb;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        padding: 6px 12px;
        cursor: pointer;
  }

    .btn-finish:hover, .btn-save:hover , .btn-choose button:hover {
        color: #ffff;
        border: 1px solid #ff4c6d;
        background-color: #ff4c6d;
        border-radius: 25px;
        transition: 0.4s;
}

    .evaluate {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 2rem;
    }

    .evaluation, .add-review {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    .btn-choose {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .grade, .review {
        color: #ff4c6d;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    input[type="number"] {
        width: 150px;
        font-size: 15px;
        color: #0f77ff;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        padding: 8px 10px;
        outline-color: #00c2cb;
    }

    input[type="number"]:focus {
        border: 2px solid #00c2cb;
    }

    input[type="number"]::placeholder {
        color: #00c2cb;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    textarea {
        padding: 15px 15px;
        font-size: 15px;
        color: #0f77ff;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        outline-color: #00c2cb;
        width: 225px;
        height: 300px;
        resize: none;
    }

    textarea:focus {
        border: 2px solid #00c2cb;
    }

    textarea::placeholder {
        color: #00c2cb;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    
    ::-webkit-scrollbar-button:start:decrement,
    ::-webkit-scrollbar-button:end:increment  {
        height: 25px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-track-piece  {
        width: 6px;
        background-color: #e2f5f6;
        -webkit-border-radius: 25px;
    }

    ::-webkit-scrollbar-thumb:vertical {
        height: 1px;
        background-color: #00c2cb;
        border: 3px solid #e2f5f6;
        -webkit-border-radius: 25px;
    }

</style>