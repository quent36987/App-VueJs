<template>
    <div class="block_somme_item" :style="style" @click="$emit('on-click')">
        {{ value }}
    </div>
</template>

<script lang="ts">
    import { IDict } from "@/utils/interfaces";
    import { State } from "vuex-class";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class VToken extends Vue {
        @State protected readonly tokenSelected!: number;
        @Prop() protected readonly value!: number;

        protected get style(): IDict<string> {
            const BG_COLOR = this.tokenSelected === this.value ? "#2df317" : "";

            return {
                "--bg--color": BG_COLOR,
            };
        }
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
