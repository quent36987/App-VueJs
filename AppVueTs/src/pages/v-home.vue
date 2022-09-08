<template>
    <div class="v-home">
        <div>let's all play together a LITTLE GAME</div>

        <input v-model="username" placeholder="username" />
        <button v-show="username !== ''" @click="login">Let's Go !</button>
    </div>
</template>

<script lang="ts">
    import { init } from "@/socket-setup";
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class extends Vue {
        protected username = "";

        protected login(): void {
            init(this.username);
        }
    }
</script>

<style scoped>
    .v-home {
        margin-top: 50px;
        font-size: 25px;
    }
</style>
