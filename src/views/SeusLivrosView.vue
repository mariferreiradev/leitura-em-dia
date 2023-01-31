<template>
    <div class="seus-livros">
        <h1>Livros</h1>
        <div class="pesquisa">
            <div class="buscar">
                <input type="text" placeholder="Buscar por..." />
                <img src="../../public/img/lupa.webp" alt="Buscar" width="24" height="24">
            </div>
            <img class="filtro" src="../../public/img/filtro.webp" alt="Filtrar" width="24" height="24">
        </div>
        <div class="livros">
            <div class="livro">
                <p>Cracking the Coding Interview</p>
                <div>
                    <span><img src="../../public/img/lendo.png" alt="Lendo" width="25" height="25"></span>
                </div>
            </div>
            <div class="livro">
                <p>Clean Code</p>
                <div>
                    <span><img src="../../public/img/concluido.png" alt="Concluído" width="25" height="25"></span>
                </div>
            </div>
        </div>
        <div class="btn">
            <button class="btn-add">Adicionar livro</button>
        </div>
    </div>
    <div class="add-livros">
        <h1>Adicionar livros</h1>
        <div class="nome-livro">
            <label for="">Digite o nome do livro:</label>
            <input type="text">
        </div>
        <div class="nome-autor">
            <label for="">Digite o nome do autor:</label>
            <input type="text">
        </div>
        <div class="n-paginas">
            <label for="">Digite o número de páginas:</label>
            <input type="number">
        </div>
        <div class="btn">
            <button class="btn-add">Adicionar</button>
        </div>
    </div>
    <div class="concluidos">
        <h1>A Cabana</h1>
        <div class="dados">
            <div class="bloco">
                <img src="..//../public/img/autores.webp" alt="Autor" width="35" height="35">
                <span>Augusto Cury</span>
            </div>
            <div class="bloco">
                <img src="..//../public/img/paginas-lidas.webp" alt="Páginas" width="35" height="35">
                <span>126 páginas</span>
            </div>
        </div>
        <div class="dados">
            <div class="bloco">
                <img src="..//../public/img/tempo.webp" alt="Tempo de leitura" width="35" height="35">
                <span>Leitura em 01 dia</span>
            </div>
            <div class="bloco">
                <img src="..//../public/img/estrela-nota.webp" alt="Nota" width="36" height="36">
                <span>Avaliação 4.8</span>
            </div>
        </div>
        <div class="resenha">
            <h3>Resenha:</h3>
            <div>
                <p>Resenha do livro...</p>
            </div>
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
    .seus-livros {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 2rem;
    }
    .pesquisa {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .buscar {
        position: relative;
    }
    .buscar img {
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
    .filtro {
        cursor: pointer;
    }
    .livros {
        color: #0f77ff;
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
        cursor: pointer;
    }
    .livro span {
        color: #ff4c6d;
        font-weight: 600;
    }
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
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


    .add-livros {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    .nome-livro, .nome-autor, .n-paginas {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .nome-livro input, .nome-autor input{
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

    .concluidos {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    .dados {
        text-align: center;
        font-size: 15px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        gap: 10px;
    }

    .bloco {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #00c2cb;
        width: 100px;
        gap: 8px;
    }

    .resenha {
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
</style>