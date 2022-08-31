<template>
    <div class="app">
        <v-header />

        <v-gain-history />

        <div class="block_body">
            <v-wheel :play-button-hidden="playButton" @on-click="onClick" />
            <v-board :is-running="isRunning" :cases="cases" />
            <v-token-list />
        </div>
    </div>
</template>

<script lang="ts">
    import { Case } from "@/models/case";
    import { Gain } from "@/models/gain";
    import { IBet } from "@/store/state";
    import { initCase } from "@/configs/board-utils";
    import { State } from "vuex-class";
    import { Component, Vue } from "vue-property-decorator";
    import { EMutation, store } from "@/store";
    import {
        VBoard,
        VCase,
        VGainHistory,
        VHeader,
        VTokenList,
        VWheel,
    } from "@/components/roulette";

    @Component({
        components: {
            "v-board": VBoard,
            "v-case": VCase,
            "v-gain-history": VGainHistory,
            "v-header": VHeader,
            "v-token-list": VTokenList,
            "v-wheel": VWheel,
        },
    })
    export default class PageRoulette extends Vue {
        @State protected readonly bets!: IBet;
        @State protected readonly money!: number;
        @State protected readonly tokenSelected!: number;
        @State protected readonly wheelNumber!: number;

        protected cases: Case[] = [];
        protected isRunning = true;
        protected playButton = true;

        public mounted(): void {
            this.cases = initCase();
        }

        /** Run the wheel */
        public onClick(): void {
            this.isRunning = true;
            this.playButton = false;
            const DELAY_HIDDEN_PLAY_BUTTON = 1800;
            const DELAY_RESULT = 500;

            setTimeout((): void => {
                this.playButton = true;
            }, DELAY_HIDDEN_PLAY_BUTTON);

            setTimeout(
                async (): Promise<void> => this.calculateResults(),
                DELAY_RESULT
            );
        }

        private addGain(value: number): void {
            const getters = store.getters as { totalMise: number };
            store.commit(
                EMutation.AddGain,
                new Gain(
                    this.wheelNumber,
                    value - getters.totalMise,
                    this.bets,
                    this.money
                )
            );
        }

        private async calculateResults(): Promise<void> {
            const NUMBER_NUM_WHEEL = 36;
            this.isRunning = false;

            store.commit(
                EMutation.SetWheelNumber,
                Math.floor(Math.random() * (NUMBER_NUM_WHEEL + 1))
            );

            const results = [];
            for (const bet of this.cases) {
                results.push(bet.result(this.wheelNumber));
            }

            const tab = await Promise.all(results);
            const GAIN = tab.reduce(
                (accumulator, curr): number => accumulator + curr
            );

            store.commit(EMutation.IncrementMoney, GAIN);
            this.addGain(GAIN);
            store.commit(EMutation.ResetBet);
        }
    }
</script>

<style scoped>
    .app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: white;
        background-color: green;
        border: #1df387 6px solid;
        user-select: none;
    }

    .block_body {
        width: 100%;
        display: flex;
        align-items: flex-start;
    }
</style>
