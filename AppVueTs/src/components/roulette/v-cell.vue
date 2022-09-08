<template>
    <div
        class="v-cell"
        :class="{ highlight }"
        :style="style"
        @click="$emit('click')"
        @contextmenu.prevent
        @click.right="$emit('click-right')"
    >
        {{ cell.title }}

        <div v-if="cell.value > 0" class="wheel-number">
            {{ cell.value }}
        </div>
    </div>
</template>

<script lang="ts">
    import { Cell } from "@/models/cell";
    import { IDict } from "@/utils/interfaces";
    import { PropType } from "vue";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class extends Vue {
        @Prop({ required: true, type: Object as PropType<Cell> })
        protected readonly cell!: Cell;

        @Prop({ required: true, type: Boolean })
        protected readonly highlight!: boolean;

        protected get style(): IDict<string> {
            return {
                "--bg-color": `var(--${this.cell.backgroundColor})`,
                "--grid-col": this.cell.gridCol,
                "--grid-row": this.cell.gridRow,
            };
        }
    }
</script>

<style scoped>
    .v-cell {
        --bg-color: pink;
        --grid-row: "";
        --grid-col: "";

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        min-height: 40px;

        background-color: var(--bg-color);
        border: white 1px solid;
        grid-column: var(--grid-col);
        grid-row: var(--grid-row);
    }

    .wheel-number {
        width: 25px;
        height: 25px;
        position: absolute;

        background-color: cadetblue;
        border-radius: 10px;
        border: black 2px dashed;
        font-size: 15px;
    }

    .v-cell.highlight {
        animation-name: blink;
        animation-duration: 5s;
    }

    .v-cell:hover {
        background-color: var(--cell-hover);
    }

    @keyframes blink {
        0% {
            background-color: var(--bg-color);
        }
        40% {
            background-color: var(--cell-highlight);
        }
        100% {
            background-color: var(--bg-color);
        }
    }
</style>
