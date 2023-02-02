<template>
    <div class="add-page">
        <h1>Adicionar Páginas</h1>
        <div class="livros">
            <label for="">Escolha o livro:</label>
            <select name="" id="">
                <option value="">Selecione</option>
                <option value="">Livro 01</option>
                <option value="">Livro 02</option>
            </select>
        </div>
        <div class="paginas">
            <label for="">Quantidade de páginas lidas:</label>
            <input type="number" />
        </div>
        <div class="tempo">
            <label for="">Tempo de leitura:</label>
            <input type="time" />
        </div>
        <div class="btn">
            <button>Voltar</button>
            <button>Salvar</button>
        </div>
    </div>
</template>

<style scoped>

    .add-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 2rem;
    }

    h1 {
        color: #ff4c6d;
        text-align: center;
        font-size: 30px;
    }

    .livros, .paginas, .tempo {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
    }

    .livros select {
        text-align: center;
        -webkit-appearance: none;
        width: 150px;
        font-size: 15px;
        color: #0f77ff;
        border: 1px solid #ff4c6d;
        border-radius: 25px;
        padding: 8px 10px;
        outline-color: #ff4c6d;
    }

    .livros select:focus {
        border: 2px solid #ff4c6d;
    }

    input[type="number"] {
        width: 150px;
        font-size: 15px;
        color: #0f77ff;
        border: 1px solid #ff4c6d;
        border-radius: 25px;
        padding: 8px 10px;
        outline-color: #ff4c6d;
    }

    input[type="number"]:focus {
        border: 2px solid #ff4c6d;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="time"] {
        width: 150px;
        font-size: 15px;
        color: #0f77ff;
        border: 1px solid #ff4c6d;
        border-radius: 25px;
        padding: 8px 10px;
        outline-color: #ff4c6d;
    }

    input[type="time"]:focus {
        border: 2px solid #ff4c6d;
    }

    input[type="time"]::-webkit-calendar-picker-indicator {
        cursor: pointer;
        filter: invert(100%);
        background-color: #00B493;
        border-radius: 100%;
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    button {
        width: 70px;
        font-size: 15px;
        color: #ffff;
        background-color: #00c2cb;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        padding: 6px 12px;
        cursor: pointer;
    }

    button:hover {
        color: #ffff;
        border: 1px solid #ff4c6d;
        background-color: #ff4c6d;
        border-radius: 25px;
        transition: 0.4s;
    }
</style>