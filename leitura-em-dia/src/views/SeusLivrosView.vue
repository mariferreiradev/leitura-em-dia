<template>
    <div class="add-livros">
        <div class="pesquisa">
            <input type="text" placeholder="Buscar por" />
            <img src="../../public/img/lupa.webp" alt="Buscar" width="25" height="25">
            <img src="../../public/img/filtro.webp" alt="Filtrar" width="20" height="20">
        </div>
        <div class="livros">
            <div class="livro">
                <p>A bela adormecida</p>
                <div>
                    <span>Concluído</span>
                </div>
            </div>
        </div>
        <div class="btn">
            <button class="add-livro">Adicionar livro</button>
        </div>
    </div>
</template>

<style scoped>

    .add-livros {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 2rem;
    }

    .pesquisa {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
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

    .livros {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
    }

    .livro {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 14px;
    }
    
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .add-livro {
        font-size: 15px;
        background-color: #00c2cb;
        color: #ffff;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        padding: 8px 10px;
        cursor: pointer;
    }

    .add-livro:hover {
        background-color: #ff4c6d;
        border: 1px solid #ff4c6d;
        transition: 0.4s;
    }

</style>