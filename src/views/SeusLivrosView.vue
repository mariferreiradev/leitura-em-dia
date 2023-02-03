<script>
    export default {
        data: () => ({
            addBooks: true,
            completed: true,
            yourBooksOpen: false,
        }),

        methods: {
            toggleAddBooks() {
                this.yourBooksOpen = !this.yourBooksOpen
                this.addBooks = !this.addBooks
            },

            toggleCompleted() {
                this.yourBooksOpen = !this.yourBooksOpen
                this.completed = !this.completed
            }
        },
    }
</script>

<template>
    <div class="your-books" :class="{hidden: yourBooksOpen}">
        <h1>Livros</h1>
        <div class="search-options">
            <div class="search">
                <input type="text" placeholder="Buscar por..." />
                <img src="../../public/img/lupa.webp" alt="Buscar" width="24" height="24">
            </div>
            <img class="filter" src="../../public/img/filtro.webp" alt="Filtrar" width="24" height="24">
        </div>
        <div class="books">
            <div class="book" v-on:click="toggleCompleted()">
                <p>Cracking the Coding Interview</p>
                <div>
                    <span><img src="../../public/img/lendo.png" alt="Lendo" width="25" height="25"></span>
                </div>
            </div>
            <div class="book" v-on:click="toggleCompleted()">
                <p>Clean Code</p>
                <div>
                    <span><img src="../../public/img/concluido.png" alt="Concluído" width="25" height="25"></span>
                </div>
            </div>
        </div>
        <div class="btn">
            <button class="btn-add" v-on:click="toggleAddBooks()">Adicionar livro</button>
        </div>
    </div>
    <div class="add-books" :class="{hidden: addBooks}">
        <h1>Adicionar livros</h1>
        <div class="name-book">
            <label for="">Digite o nome do livro:</label>
            <input type="text">
        </div>
        <div class="name-author">
            <label for="">Digite o nome do autor:</label>
            <input type="text">
        </div>
        <div class="number-pages">
            <label for="">Digite o número de páginas:</label>
            <input type="number">
        </div>
        <div class="btn">
            <button class="btn-primary btn-add" v-on:click="toggleAddBooks()">Voltar</button>
            <button class="btn-primary btn-add" v-on:click="toggleAddBooks()">Salvar</button>
        </div>
    </div>
    <div class="completed" :class="{hidden: completed}">
        <h1>A Cabana</h1>
        <div class="data-book">
            <div class="data">
                <img src="..//../public/img/autores.webp" alt="Autor" width="35" height="35">
                <span>Augusto Cury</span>
            </div>
            <div class="data">
                <img src="..//../public/img/paginas-lidas.webp" alt="Páginas" width="35" height="35">
                <span>126 páginas</span>
            </div>
        </div>
        <div class="data-book">
            <div class="data">
                <img src="..//../public/img/tempo.webp" alt="Tempo de leitura" width="35" height="35">
                <span>Leitura em 01 dia</span>
            </div>
            <div class="data">
                <img src="..//../public/img/estrela-nota.webp" alt="Nota" width="36" height="36">
                <span>Avaliação 4.8</span>
            </div>
        </div>
        <div class="review">
            <h3>Resenha:</h3>
            <div>
                <p>Resenha do livro...</p>
            </div>
        </div>
        <div class="btn">
            <button class="btn-primary btn-add" v-on:click="toggleCompleted()">Voltar</button>
        </div>
    </div>
</template>

<style scoped>
    h1 {
        font-size: 30px;
        color: #ff4c6d;
        text-align: center;
        margin-bottom: 15px;
    }
    .your-books {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 2rem;
    }
    .search-options {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .search {
        position: relative;
    }
    .search img {
        position: absolute;
        top: 6px;
        right: 12px;
        cursor: pointer;
    }

    input[type="text"] {
        font-size: 15px;
        color: #0f77ff;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        outline-color: #00c2cb;
        padding: 9px 11px;
        width: 150px;
    }

    input[type="text"]:focus {
        border: 2px solid #00c2cb;
    }

    input[type="text"]::placeholder {
        color: #00c2cb;
    }
    .filter {
        cursor: pointer;
    }
    .books {
        color: #0f77ff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
    }
    .book {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 14px;
        cursor: pointer;
    }
    .book span {
        color: #ff4c6d;
        font-weight: 600;
    }
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .btn-primary {
        width: 70px;
    }
    .btn-add {
        font-size: 15px;
        background-color: #00c2cb;
        color: #ffff;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        padding: 8px 10px;
        cursor: pointer;
    }
    .btn-add:hover {
        background-color: #ff4c6d;
        border: 1px solid #ff4c6d;
        transition: 0.4s;
    }


    .add-books {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    .name-book, .name-author, .number-pages {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .name-book input, .name-author input{
        width: 150px;
        font-size: 15px;
        color: #0f77ff;
        border: 1px solid #ff4c6d;
        border-radius: 25px;
        padding: 8px 10px;
        outline-color: #ff4c6d;
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

    .completed {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    .data-book {
        text-align: center;
        font-size: 15px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        gap: 10px;
    }

    .data {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #00c2cb;
        width: 100px;
        gap: 8px;
    }

    .review {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    h3 {
        color: #ff4c6d;
    }

    .hidden {
        display: none;
    }
</style>