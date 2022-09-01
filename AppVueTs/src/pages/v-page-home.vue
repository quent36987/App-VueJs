<template>
    <div class="home">
        <div>jouons tous ensemble a un PETIT JEUUUUUXXXXX</div>
        <input v-model="username" placeholder="username" />
        <button v-show="username !== ''" @click="onClick">Let's Go !</button>
    </div>
</template>

<script lang="ts">
    import { init } from "@/socket-setup";
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class VPageHome extends Vue {
        public username = "";

        public onClick(): void {
            init(this.username);
        }
    }
</script>

<style scoped>
    .home {
        margin-top: 50px;
        font-size: 25px;
    }
</style>
