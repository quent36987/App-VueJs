<template>
    <div class="v-game-wheel">
        <v-header />

        <v-gains-history />

        <div class="block-body">
            <v-wheel-box :show-button="showButtonPlay" @click="runWheel" />
            <v-board :is-running="isRunning" :cells="cells" />
            <v-token-list />
        </div>

        <v-chat-box />
    </div>
</template>

<script lang="ts">
    import { Cell } from "@/models/cell";
    import { IBet } from "@/store/state";
    import { initCells } from "@/configs/board-utils";
    import { Round } from "@/models/round";
    import { State } from "vuex-class";
    import { Component, Vue } from "vue-property-decorator";
    import {
        DELAY_HIDDEN_PLAY_BUTTON,
        DELAY_RESULT,
        MAX_NUMBER_WHEEL,
        MIN_NUMBER_WHEEL,
    } from "@/configs/constants";
    import { EMutation, store } from "@/store";
    import { randomNumber, tableSum } from "@/utils/math";
    import {
        VBoard,
        VChatBox,
        VGainsHistory,
        VHeader,
        VTokenList,
        VWheelBox,
    } from "@/components/roulette";

    @Component({
        components: {
            "v-board": VBoard,
            "v-chat-box": VChatBox,
            "v-gains-history": VGainsHistory,
            "v-header": VHeader,
            "v-token-list": VTokenList,
            "v-wheel-box": VWheelBox,
        },
    })
    export default class extends Vue {
        @State protected readonly bets!: IBet;
        @State protected readonly money!: number;
        @State protected readonly selectedToken!: number;
        @State protected readonly wheelNumber!: number;

        protected cells: Cell[] = [];
        protected isRunning = true;
        protected showButtonPlay = true;

        protected mounted(): void {
            this.cells = initCells();
        }

        protected runWheel(): void {
            this.isRunning = true;
            this.showButtonPlay = false;

            setTimeout((): void => {
                this.showButtonPlay = true;
            }, DELAY_HIDDEN_PLAY_BUTTON);

            setTimeout(async (): Promise<void> => {
                return this.calculateResults();
            }, DELAY_RESULT);
        }

        private addGain(value: number): void {
            const getters = store.getters as { totalBet: number };
            const round = new Round(
                this.wheelNumber,
                value - getters.totalBet,
                this.bets,
                this.money
            );

            store.commit(EMutation.AddRound, round);
        }

        private async calculateResults(): Promise<void> {
            this.isRunning = false;

            const WHEEL_NUMBER = randomNumber(
                MIN_NUMBER_WHEEL,
                MAX_NUMBER_WHEEL
            );

            const cellsEarning = [];
            for (const cell of this.cells) {
                cellsEarning.push(cell.gainEarning(WHEEL_NUMBER));
            }

            const TOTAL_GAIN = tableSum(await Promise.all(cellsEarning));

            store.commit(EMutation.SetWheelNumber, WHEEL_NUMBER);
            this.addGain(TOTAL_GAIN);

            store.commit(EMutation.IncrementMoney, TOTAL_GAIN);
            store.commit(EMutation.ResetBet);
        }
    }
</script>

<style scoped>
    .v-game-wheel {
        background-color: green;
        border: #1df387 6px solid;
        color: white;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
        user-select: none;
    }

    .block-body {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: flex-start;

        width: 100%;
    }
</style>
