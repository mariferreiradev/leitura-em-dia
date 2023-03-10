<script>
    export default {
        data: () => ({
            alert: true,
            bookName: '',
            bookAuthor: '',
            pagesBook: ''
        }),

        methods: {
            saveBook() {
                const books = JSON.parse(localStorage.getItem('books') || '[]')
                const newBook = {
                    bookName: this.bookName,
                    bookAuthor: this.bookAuthor,
                    pagesBook: this.pagesBook,
                    pagesRead: 0,
                    readingTime: 0
                }
                books.push(newBook)
                localStorage.setItem('books' , JSON.stringify(books))
                this.alert = !this.alert
                setTimeout(() => this.alert = true, 3000);
            },
            goBacktoHome() {
                this.$router.push('/');
            },
        }
    }
</script>
<template>
    <div class="add-books" :class="{ hidden: addBooks }">
        <h1>Adicionar livros</h1>
        <div class="name-book">
            <label for="">Digite o nome do livro:</label>
            <input type="text" v-model="bookName">
        </div>
        <div class="name-author">
            <label for="">Digite o nome do autor:</label>
            <input type="text" v-model="bookAuthor">
        </div>
        <div class="number-pages">
            <label for="">Digite o número de páginas:</label>
            <input type="number" v-model="pagesBook">
        </div>
        <div class="btn">
            <button class="btn-small btn-primary" v-on:click="goBacktoHome()">Voltar</button>
            <button class="btn-small btn-primary" v-on:click="saveBook()">Salvar</button>
        </div>
        <span :class="{ hidden: alert }">Livro adicionado!</span>
    </div>
</template>

<style scoped>
    h1 {
        font-size: 30px;
        color: #ff4c6d;
        text-align: center;
        margin-bottom: 15px;
    }
    .add-books {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    .name-book,
    .name-author,
    .number-pages {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .name-book input,
    .name-author input {
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
    .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
    .btn-primary {
        width: 70px;
        font-size: 15px;
        background-color: #00c2cb;
        color: #ffff;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        padding: 8px 10px;
        cursor: pointer;
    }
    .btn-primary:hover {
        background-color: #ff4c6d;
        border: 1px solid #ff4c6d;
        transition: 0.4s;
    }
    span {
    color: #ff4c6d;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .hidden {
        display: none;
    }
</style>