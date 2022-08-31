<template>
    <div class="home">
        <div>jouons tous ensemble a un PETIT JEUUUUUXXXXX</div>
        <router-link to="/jeux">Play</router-link>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class VPageHome extends Vue {}
</script>

<style scoped>
    .home {
        margin-top: 50px;
        font-size: 25px;
    }
</style>
