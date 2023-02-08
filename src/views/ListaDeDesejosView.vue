<script>
    export default {
        data: () => ({
            currentWishes: "",
            wishlist: [
                
            ]
        }),

        methods: {
            goBacktoHome() {
                this.$router.push('/');
            },

            addWishes() {
                this.wishlist.push({
                    text: this.currentWishes,
                });
                this.currentWishes = "";
            },

            removeWishes(wishes) {
                this.wishlist = this.wishlist.filter(el => el.text !== wishes.text);
            }
        },
    }
</script>

<template>
    <div class="wish-page">
        <h1>Lista de Desejos</h1>
        <div class="add-wishes">
            <input type="text" v-model="currentWishes" placeholder="Digite o nome do livro...">
            <button class="btn-primary" v-on:click="addWishes()">+</button>
        </div>
        <div class="wishlist">
            <div class="wishes" v-for="wishes in wishlist" :key="wishes.text">
                <p>{{ wishes.text }}</p>
                <button class="btn-remove" v-on:click="removeWishes(wishes)">Remover</button>
            </div>
        </div>
        <button class="btn-primary btn-back" v-on:click="goBacktoHome()">Voltar</button>
    </div>
</template>

<style scoped>
    .wish-page {
        font-size: 15px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }

    h1 {
        text-align: center;
        color: #ff4c6d;
    }

    .add-wishes {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .wishlist {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .wishes {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }

    .btn-primary {
        text-align: center;
        font-size: 25px;
        color: #ffff;
        background-color: #00c2cb;
        border: 1px solid #00c2cb;
        border-radius: 30px;
        padding: 1px 8px;
        cursor: pointer;
    }

    .btn-primary:hover {
        color: #ffff;
        border: 1px solid #ff4c6d;
        background-color: #ff4c6d;
        border-radius: 25px;
        transition: 0.4s;
    }

    .btn-remove {
        padding: 4px 8px;
        width: 70px;
        height: 25px;
        font-size: 12px;
        color: #ffff;
        border-radius: 25px;
        border: 1px solid #ff4c6d;
        background-color: #ff4c6d;
        cursor: pointer;
    }

    .btn-back {
        font-size: 15px;
        padding: 6px 12px;
    }

    input[type="text"] {
        font-size: 15px;
        color: #0f77ff;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        outline-color: #00c2cb;
        padding: 8px 12px;
        width: 180px;
    }

    input[type="text"]:focus {
        border: 2px solid #00c2cb;
    }

    input[type="text"]::placeholder {
        color: #00c2cb;
    }
</style>