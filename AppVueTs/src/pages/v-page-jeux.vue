<template>
    <div class="pages-jeux">
        <nav>
            <router-link to="/jeux">Roulette</router-link> |
            <router-link to="/history">Historique</router-link>
        </nav>
        <router-view />
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class VPageJeux extends Vue {}
</script>

<style scoped>
    .pages-jeux {
      max-width: 1400px;
      min-width: 1000px;
      margin-left: auto;
      margin-right: auto;
    }
</style>
