<template>
    <div class="estatisticas">
        <h1>Estatísticas</h1> 
        <p>Escolha o período que deseja:</p>
        <div class="periodo">
            <div class="data">
                <label for="">De:</label>
                <input type="date">
            </div>
            <div class="data">
                <label for="">Até:</label>
                <input type="date">
            </div>
        </div>
        <div>
            <div class="marcadores">
                <div>
                    <div>Livros</div>
                    <div><span>89</span><p>Livros lidos</p></div>
                </div>
                <div>
                    <div>Páginas</div>
                    <div><span>1003</span><p>Páginas lidas</p></div>
                </div>
            </div>
            <div class="marcadores">
                <div>
                    <div>Tempo</div>
                    <div><span>148</span><p>Horas lidas</p></div>
                </div>
                <div>
                    <div>Autor</div>
                    <div><span>Augusto Cury</span></div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    .estatisticas {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 30px;
        padding: 2rem;
    }
    .estatisticas p {
        font-size: 16px;
    }
    .periodo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
    .data {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .data label {
        font-size: 15px;
        color: #ff4c6d;
    }
    input[type="date"] {
        font-size: 15px;
        color: #ffff;
        text-transform: uppercase;
        background-color: #ff4c6d;
        border: 1px solid #ff4c6d;
        border-radius: 25px;
        padding: 6px 12px;
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
        cursor: pointer;
        filter: invert(100%);
    }

    input[type="date"]:focus-visible{
        outline: 1px solid #ff4c6d;
    }

    .marcadores {
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
    }
</style>