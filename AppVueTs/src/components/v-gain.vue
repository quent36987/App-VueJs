<template>
    <div class="gain">
        {{ value > 0 ? "➕" : "➖" }}
        {{ Math.abs(value) }}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class VGain extends Vue {
        @Prop() protected readonly gain!: number;
    }
</script>

<style scoped>
    .gain {
        border: black 1px solid;
        padding: 5px;
        border-radius: 4px;
        min-width: 45px;
        margin-left: 5px;
    }
</style>
