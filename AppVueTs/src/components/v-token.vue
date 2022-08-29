<template>
    <div
        class="block_somme_item"
        :style="{
            'background-color': tokenSelected === value ? '#2df317' : '',
        }"
        @click="$emit('click')"
    >
        {{ value }}
    </div>
</template>

<script lang="ts">
    import { State } from "vuex-class";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class VToken extends Vue {
        @State protected readonly tokenSelected!: number;
        @Prop() protected readonly value!: number;
    }
</script>

<style scoped>
    .block_somme_item {
        --bg--color: "";
        background-color: var(--bg--color);
        height: 50px;
        width: 50px;
        margin-bottom: 25px;
        font-size: 24px;
        border-radius: 25px;
        border: black 2px dashed;
        margin-right: 25px;
        font-weight: bold;
        padding: 10px;
    }
    .block_somme_item:hover {
      background-color: #2df317;
    }
</style>
