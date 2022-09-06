<template>
    <div class="board">
        <v-case
            class="case"
            v-for="elt in cases"
            :key="elt.id"
            :case-model="elt"
            :style="{
                '--grid-col': elt.gridCol,
                '--grid-row': elt.gridRow,
            }"
            :highlight="elt.predicate(wheelNumber) && !isRunning"
            @on-click="elt.incrementValue(tokenSelected)"
            @on-click-right="elt.decrementValue(tokenSelected)"
        >
        </v-case>
    </div>
</template>

<script lang="ts">
    import { Case } from "@/models/case";
    import { PropType } from "vue";
    import { State } from "vuex-class";
    import { VCase } from "@/components/roulette/index";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({
        components: {
            "v-case": VCase,
        },
    })
    export default class VBoard extends Vue {
        @Prop({ required: true, type: Array as PropType<Case[]> })
        protected readonly cases!: Case[];

        @Prop({ required: true, type: Boolean })
        protected readonly isRunning!: boolean;

        @State protected readonly tokenSelected!: number;
        @State protected readonly wheelNumber!: number;
    }
</script>

<style scoped>
    .board {
        display: grid;
        padding: 10px;
        margin: 50px 10px 10px;
        flex: 3;
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

    .case {
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

    .case:hover {
        background-color: #2df317;
    }
</style>