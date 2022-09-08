<template>
    <div class="v-board">
        <v-cell
            v-for="cell in cells"
            :key="cell.id"
            :cell="cell"
            :highlight="cell.predicate(wheelNumber) && !isRunning"
            @click="cell.incrementValue(selectedToken)"
            @click-right="cell.decrementValue(selectedToken)"
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

        @State protected readonly selectedToken!: number;
        @State protected readonly wheelNumber!: number;
    }
</script>

<style scoped>
    .v-board {
        display: grid;
        grid-template-columns: repeat(14, 1fr);

        width: 100%;

        padding: 10px;
        margin: 50px 10px 10px;

        color: white;
        background-color: green;
        font-size: 20px;
        font-weight: bold;
        flex: 3;
    }
</style>
