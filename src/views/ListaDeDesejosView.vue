<template>
    <div class="wish-page">
        <h1>Lista de Desejos</h1>
        <div class="add-wishes">
            <input type="text" placeholder="Nome do livro...">
            <button class="btn-primary">Adicionar</button>
        </div>
        <div class="wishlist">
            <div class="wishes">
                <p>Aprenda programação</p>
                <button class="btn-remove">Remover</button>
            </div>
            <div class="wishes">
                <p>Lógica de programação
                </p>
                <button class="btn-remove">Remover</button>
            </div>
        </div>

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
        font-size: 15px;
        color: #ffff;
        background-color: #00c2cb;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        padding: 6px 12px;
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

    input[type="text"] {
        font-size: 15px;
        color: #0f77ff;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        outline-color: #00c2cb;
        padding: 8px 12px;
        width: 125px;
    }

    input[type="text"]:focus {
        border: 2px solid #00c2cb;
    }

    input[type="text"]::placeholder {
        color: #00c2cb;
    }
</style>