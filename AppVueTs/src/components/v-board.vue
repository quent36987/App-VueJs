<template>
    <div class="block_mise_1">
        <v-case
            v-for="elt in cases"
            :key="elt.id"
            class="block_mise_1_item"
            :style="{
                '--grid-col': elt.gridCol,
                '--grid-row': elt.gridRow,
            }"
            :title="elt.title"
            :background-color="elt.backgroundColor"
            :value="elt.value"
            :highlight="elt.condition(wheel) && !isRunning"
            @click="elt.incrementValue(tokenSelected)"
            @click_right="elt.decrementValue(tokenSelected)"
        />
    </div>
</template>

<script lang="ts">
    import Case from "@/class/case";
    import { State } from "vuex-class";
    import { VCase } from "@/components";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({
        components: {
            "v-case": VCase,
        },
    })
    export default class VBoard extends Vue {
        @Prop() protected readonly cases!: Case[];
        @Prop() protected readonly isRunning!: boolean;
        @State protected readonly tokenSelected!: number;
        @Prop() protected readonly wheel!: number;
    }
</script>

<style scoped>
    .block_mise_1 {
        padding: 10px;
        margin: 50px 10px 10px;
        flex: 3;
        display: grid;
        grid-template-columns: repeat(14, 1fr);
        justify-items: stretch;
        align-items: stretch;
        justify-content: stretch;
        align-content: center;
        color: white;
        background-color: green;
        width: 100%;
        font-size: 20px;
        font-weight: bold;
    }

    .block_mise_1_item {
        --grid-row: "";
        --grid-col: "";
        grid-column: var(--grid-col);
        grid-row: var(--grid-row);
        min-height: 40px;
        border: white 1px solid;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .block_mise_1_item:hover {
        background-color: #2df317;
    }
</style>