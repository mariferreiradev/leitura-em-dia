<script>
    import profileImage from '../assets/profile-img.webp'
    export default {
        data: () => ({
            nome:"",
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
            <label for="">Nome:</label>
            <input type="text" v-model="nome" placeholder="digite seu nome">
        </div>
    </div>
</template>

<style scoped>

    .perfil {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .add-foto img {
        border-radius: 100%;
    }
</style>