<script>
    import profileImage from '../assets/profile-img.webp'
    export default {
        data: () => ({
            name:"Usuário",
            userName:"",
            image: profileImage
        }),

        methods: {
            previewFiles(event) {
                this.image = URL.createObjectURL(event.target.files[0]);
            },

            saveProfile() {
                this.name = this.userName
                this.userName = ""
            }
            
        }
    }
</script>

<template>
    <div class="profile">
        <div class="user">
            <div class="add-photo">
                <label for="avatar"><img :src="image" alt="Foto do usuário" width="100" height="100" /></label>
                <input type="file" id="avatar" name="avatar" accept="image/.png, image/.jpeg" @change="previewFiles" />
                <span>{{name}}</span>
            </div>
            <div>
                <input v-model="userName" name="name" type="text" placeholder="Digite seu nome...">
            </div>
        </div>
        <button v-on:click="saveProfile()">Salvar</button>
    </div>
</template>

<style scoped>

    .profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        padding: 2rem 4rem;
    }

    .user {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 25px;
    }

    .add-photo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .add-photo label {
        font-size: 15px;
        background-color: transparent;
        color: #00c2cb;
        border-radius: 100%;
        cursor: pointer;
    }

    .add-photo img {
        border-radius: 100%;
    }

    input[type="file"]{
        display: none;
    }

    .add-photo span {
        font-size: 20px;
        font-weight: 700;
    }

    input[type="text"] {
        font-size: 15px;
        color: #0f77ff;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        padding: 8px 10px;
        outline-color: #00c2cb;
    }

    input[type="text"]:focus {
        border: 2px solid #00c2cb;
    }

    input::placeholder {
        color: #00c2cb;
    }

    button {
        font-size: 15px;
        background-color: #00c2cb;
        color: #ffff;
        border: 1px solid #00c2cb;
        border-radius: 25px;
        padding: 8px 15px;
        cursor: pointer;
    }

    button:hover {
        background-color: #ff4c6d;
        border: 1px solid #ff4c6d;
        color: #ffff;
    }
  
</style>