<script>
    export default {
        data: () => ({
            alert: true,
            selectedBook: '',
            pagesRead: 0,
            readingTime: '',
            books: []
        }),

        mounted () {
            this.books = JSON.parse(localStorage.getItem('books') || '[]')   
        },
        computed: {
            currentBook() {
                return this.books.find((book) => book.bookName === this.selectedBook)
            },
        },
        methods: {
            saveAlert() {
                this.alert = !this.alert
                setTimeout(() => this.alert = true, 2000);
                this.addDataToBook()
            },
            addDataToBook() {
                const currentBook = this.books.find(book => this.selectedBook === book.bookName);
                if (!currentBook) return;
                currentBook.pagesRead = this.pagesRead
                currentBook.readingTime = this.readingTime 
                const books = [currentBook, ...this.books.filter(book => book.bookName !== currentBook.bookName)]
                localStorage.setItem('books', JSON.stringify(books))
            },
            goBacktoHome() {
                this.$router.push('/');
            },
        }
    }
</script>

<template>
    <div class="add-page">
        <h1>Adicionar Páginas</h1>
        <div class="books">
            <label for="select-book">Escolha o livro:</label>
            <select name="select-book" v-model="selectedBook">
                <option value="">Selecione</option>
                <option :value="book.bookName" v-for="book in books" :key="book.bookName">{{book.bookName}}</option>
            </select>
        </div>
        <div class="pages">
            <label for="pages-read">Quantidade de páginas lidas:</label>
            <input name="pages-read" type="number" v-model="pagesRead"/>
        </div>
        <div class="time">
            <label for="reading-time">Tempo de leitura:</label>
            <input name="reading-time" type="time" v-model="readingTime"/>
        </div>
        <div>
            <div class="btn">
                <button class="btn-go-back" v-on:click="goBacktoHome()">Voltar</button>
                <button class="btn-to-save" v-on:click="saveAlert()">Salvar</button>
            </div>
            <span :class= "{hidden: alert}">Suas páginas foram salvas!</span>
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
    .books, .pages, .time {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
    }
    .books select {
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
    .books select:focus {
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
    .btn-to-save, .btn-go-back {
        width: 70px;
        font-size: 15px;
        color: #ffff;
        background-color: #00c2cb;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        padding: 6px 12px;
        cursor: pointer;
    }
    .btn-to-save:hover, .btn-go-back:hover {
        color: #ffff;
        border: 1px solid #ff4c6d;
        background-color: #ff4c6d;
        border-radius: 25px;
        transition: 0.4s;
    }

    span {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #ff4c6d;
    }
    .hidden {
        display: none;
    }
</style>