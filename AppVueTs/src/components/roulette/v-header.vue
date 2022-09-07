<template>
    <div class="v-header">
        <span>{{ money }}💲</span>
    </div>
</template>

<script lang="ts">
    import { State } from "vuex-class";
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class extends Vue {
        @State protected readonly money!: number;
    }
</script>

<style scoped>
    .v-header {
        margin-top: 20px;
        width: 100%;
        height: 8vh;
        font-size: 40px;
    }
</style>
