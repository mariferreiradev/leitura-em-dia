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
        <div class="add-foto">
            <div>
                <img :src="image" alt="Foto do usuário" width="100" height="100" />
            </div>
            <input type="file" id="avatar" name="avatar" accept="image/.png, image/.jpeg" @change="previewFiles" />
        </div>
        <div class="add-name">
            <span>{{nome}}</span>
            <div class="usuario">
                <label for="">Nome:</label>
                <input type="text" v-model="addNome" placeholder=" Digite seu nome">
            </div>
        </div>
    </div>
</template>

<style scoped>

    .perfil {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
    }

    .add-foto {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .add-foto img {
        border-radius: 100%;
    }

    .add-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .add-name span {
        font-size: 20px;
        font-weight: 700;
    }
    
    .usuario {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .usuario input {
        color: #0081cb;
        border: 1px solid #00c2cb;
        border-radius: 10px;
        padding: 8px 10px;
    }
  
</style>