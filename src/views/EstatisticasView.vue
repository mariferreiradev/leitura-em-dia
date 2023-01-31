<template>
    <div class="page-estatisticas">
        <h1>Estatísticas</h1> 
        <div class="periodo">
            <p>Escolha o período que deseja:</p>
            <div class="data">
                <label for="">De:</label>
                <input type="date">
            </div>
            <div class="data">
                <label for="">Até:</label>
                <input type="date">
            </div>
        </div>
        <div class="estatisticas">
            <div class="marcadores">
                <div class="marcador">
                    <div>
                        <img src="../../public/img/livros-lidos.webp"  width="50px" height="50px" alt="">
                    </div>
                    <div class="dados">
                        <span>89</span>
                        <p>Livros lidos</p>
                    </div>
                </div>
                <div class="marcador">
                    <div>
                        <img src="../../public/img/tempo.webp"  width="50px" height="50px" alt="">
                    </div>
                    <div class="dados">
                        <span>148</span>
                        <p>Horas lidas</p>
                    </div>
                </div>
            </div>
            <div class="marcadores">
                <div class="marcador">
                    <div>
                        <img src="../../public/img/paginas-lidas.webp" width="50px" height="50px" alt="">
                    </div>
                    <div class="dados">
                        <span>1003</span>
                        <p>Páginas lidas</p>
                    </div>
                </div>
                <div class="marcador">
                    <div>
                        <img src="../../public/img/autores.webp" width="50px" height="50px" alt="">
                    </div>
                    <div class="dados">
                        <p><span>12</span> livros de <span>Augusto Cury</span></p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    .page-estatisticas {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 30px;
        padding: 2rem;
    }

    h1 {
        font-size: 30px;
        color: #ff4c6d;
        text-align: center;
    }
    .periodo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        margin-bottom: 30px;
    }

    .periodo p {
        font-size: 16px;
        margin-bottom: 10px;
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

    .estatisticas {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .marcadores {
        font-size: 15px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 25px;
    }

    .marcador {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .dados {
        width: 100px;
    }
</style>