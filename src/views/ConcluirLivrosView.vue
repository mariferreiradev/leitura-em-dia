<script>
    export default {
        data: () => ({
            completedBooks: false,
            addEvaluation: true,
            addGrade: true,
            addReview: true,
            review: true,
            alert: false
        }),

        methods: {
            concludeBook() {
                this.completedBooks = true
                this.addEvaluation = false
                this.addGrade = true
                this.addReview = true
                this.review = true
            },

            toggleEvaluationBook() {
                this.addEvaluation = !this.addEvaluation
                this.addGrade = !this.addGrade
            },

            notEvaluate() {
                this.addEvaluation = true
                this.addGrade = true
                this.addReview = false
            },

            saveEvaluation() {
                this.addGrade = !this.addGrade
                this.addReview = !this.addReview
            },

            toggleWriteReview() {
                this.addReview = !this.addReview
                this.review = !this.review
            },

            saveReview() {
                this.completedBooks = !this.completedBooks
                this.review = !this.review
                this.alert = !this.alert
            },

            goBacktoHome() {
                this.$router.push('/');
            },
        }
    }
</script>

<template>
    <div class="completed-books" :class="{hidden: completedBooks}">
        <h1>Concluir Livros</h1>
        <div class="books">
            <span>Logica de programação</span>
            <p>Pág: <span>33</span> / <span>105</span></p>
            <span class="alert" v-show="alert">Livro concluído</span>
            <button class="btn-finish" v-on:click="concludeBook()">Concluir</button>
        </div>
        <div class="books">
            <span>Logica de programação</span>
            <p>Pág: <span>33</span> / <span>105</span></p>
            <button class="btn-finish" v-on:click="concludeBook()">Concluir</button>
        </div>
        <button class="btn-back" v-on:click="goBacktoHome()">Voltar</button>
    </div>
    <div class="evaluate">
        <div class="evaluation">
            <div class="add-evaluation" :class="{hidden: addEvaluation}">
                <p>Deseja avaliar esse livro?</p>
                <div class="btn-choose">
                    <button v-on:click="toggleEvaluationBook()">Sim</button>
                    <button v-on:click="notEvaluate()">Não</button>
                </div>
            </div>
            <div class="grade" :class="{hidden: addGrade}">
                <label>Nota de 1.0 a 5.0:</label>
                <input type="number" placeholder="Digite sua nota...">
                <button class="btn-save" v-on:click="saveEvaluation()">Salvar</button>
            </div>
        </div>
        <div class="review">
            <div class="add-review"  :class="{hidden: addReview}">
                <p>Deseja escrever uma resenha sobre o livro?</p>
                <div class="btn-choose">
                    <button v-on:click="toggleWriteReview()">Sim</button>
                    <button v-on:click="saveReview()">Não</button>
                </div>
            </div>
            <div class="write-review" :class="{hidden: review}">
                <label for="">Escreva uma resenha breve de até 800 caracteres:</label>
                <textarea name="" id="" rows="10" maxlength="800" placeholder="Escreva sua resenha..."></textarea>
                <button class="btn-save" v-on:click="saveReview()">Salvar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .completed-books{
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

    .btn-finish, .btn-save, .btn-back, .btn-choose button {
        width: 92px;
        font-size: 15px;
        color: #ffff;
        background-color: #00c2cb;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        padding: 6px 12px;
        cursor: pointer;
    }

    .btn-finish:hover, .btn-save:hover, .btn-back:hover, .btn-choose button:hover {
        color: #ffff;
        border: 1px solid #ff4c6d;
        background-color: #ff4c6d;
        border-radius: 25px;
        transition: 0.4s;
    }

    .btn-back {
        width: auto;
    }

    .btn-choose {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .btn-choose button {
        width: 70px;
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

    .evaluation, .review {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    .add-evaluation, .add-review {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .grade, .write-review {
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
        border-radius: 6px;
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
        -webkit-border-radius: 30px;
    }

    ::-webkit-scrollbar-thumb:vertical {
        height: 1px;
        background-color: #00c2cb;
        border: 3px solid #e2f5f6;
        -webkit-border-radius: 25px;
    }
    .alert {
        color: #ff4c6d;
        font-size: 12px;
    }

    .hidden {
        display: none;
    }

</style>