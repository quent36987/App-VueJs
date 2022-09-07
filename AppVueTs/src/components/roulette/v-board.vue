<template>
    <div class="v-board">
        <v-cell
            v-for="cell in cells"
            :key="cell.id"
            :cell="cell"
            :highlight="cell.predicate(wheelNumber) && !isRunning"
            @click="cell.incrementValue(tokenSelected)"
            @click-right="cell.decrementValue(tokenSelected)"
        />
    </div>
</template>

<script lang="ts">
    import { Cell } from "@/models/cell";
    import { PropType } from "vue";
    import { State } from "vuex-class";
    import { VCell } from "@/components/roulette/index";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({
        components: {
            "v-cell": VCell,
        },
    })
    export default class extends Vue {
        @Prop({ required: true, type: Array as PropType<Cell[]> })
        protected readonly cells!: Cell[];

        @Prop({ required: true, type: Boolean })
        protected readonly isRunning!: boolean;

        @State protected readonly tokenSelected!: number;
        @State protected readonly wheelNumber!: number;
    }
</script>

<style scoped>
    .v-board {
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
</style>
