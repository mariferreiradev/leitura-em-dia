<script>
    import profileImage from '../assets/profile-img.webp'
    export default {
        data: () => ({
            nome:"Usuário",
            addNome:"",
            image: profileImage
        }),

        methods: {
            previewFiles(event) {
                this.image = URL.createObjectURL(event.target.files[0]);
            }
        }
    }
</script>

<template>
    <div class="perfil">
        <div class="usuario">
            <div>
                <img :src="image" alt="Foto do usuário" width="100" height="100" />
            </div>
            <div>
                <span>{{nome}}</span>
            </div>
        </div>
        <div class="add-usuario">
            <div class="cadastro">
                <label for="avatar">Escolha uma foto</label>
                <input type="file" id="avatar" name="avatar" accept="image/.png, image/.jpeg" @change="previewFiles" />
                <input name="name" type="text" v-model="addNome" placeholder="Digite seu nome...">
            </div>
        </div>
        <button>Salvar</button>
    </div>
</template>

<style scoped>

    .perfil {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        padding: 2rem 4rem;
    }

    .usuario {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    .usuario img {
        border-radius: 100%;
    }

    .usuario span {
        font-size: 20px;
        font-weight: 700;
    }

    .cadastro {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .cadastro label {
        font-size: 15px;
        background-color: transparent;
        color: #00c2cb;
        border: 1px solid #00c2cb;
        border-radius: 10px;
        padding: 8px 10px;
        cursor: pointer;
    }

    .cadastro label:hover {
        background-color: #00c2cb;
        color: #ffff;
        border: 1px solid #00c2cb;
    }

    input[type="file"]{
        display: none;
    }

    .usuario {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    input[type="text"] {
        font-size: 15px;
        color: #0f77ff;
        border: 1px solid #00c2cb;
        border-radius: 10px;
        outline-color: #00c2cb;
        padding: 9px 11px;
    }

    input[type="text"]:focus {
        border: 2px solid #00c2cb;
    }

    input::placeholder {
        color: #00c2cb;
    }

    button {
        font-size: 15px;
        background-color: transparent;
        color: #00c2cb;
        border: 1px solid #00c2cb;
        border-radius: 10px;
        padding: 8px 10px;
        cursor: pointer;
    }

    button:hover {
        background-color: #00c2cb;
        color: #ffff;
        border: 1px solid #00c2cb;
        border-radius: 10px;
        padding: 8px 10px;
        cursor: pointer;
    }
  
</style>