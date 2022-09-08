<template>
    <div class="v-token" :style="style" @click="$emit('click')">
        {{ value }}
    </div>
</template>

<script lang="ts">
    import { IDict } from "@/utils/interfaces";
    import { State } from "vuex-class";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class extends Vue {
        @State protected readonly selectedToken!: number;

        @Prop({ required: true, type: Number })
        protected readonly value!: number;

        protected get style(): IDict<string> {
            const BG_COLOR =
                this.selectedToken === this.value ? "var(--cell-hover)" : "";

            return {
                "--bg--color": BG_COLOR,
            };
        }
    }
</script>

<style scoped>
    .v-token {
        --bg--color: "";

        height: 50px;
        width: 50px;

        background-color: var(--bg--color);
        border-radius: 25px;
        border: black 2px dashed;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 25px;
        margin-right: 25px;
        padding: 10px;
    }

    .v-token:hover {
        background-color: var(--cell-hover);
    }
</style>
