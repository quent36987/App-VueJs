<template>
    <div class="app">
        <div class="header">
            <span>{{ money() }} 💲</span>
        </div>
        <div class="gains">
            <ul v-for="gain in earnings" :key="gain">
                <div class="gain">
                    {{ gain > 0 ? "➕" : "➖" }}
                    {{ Math.abs(gain) }}
                </div>
            </ul>
        </div>
        <div class="block_body">
            <div class="block_roulette">
                <div
                    class="roulette"
                    :style="{
                        backgroundColor: red_number.includes(wheel)
                            ? 'red'
                            : 'black',
                    }"
                >
                    <div :class="wheelStyle">
                        <span>{{ wheel }}</span>
                    </div>
                </div>
                <button class="play" :style="playButtonStyle" @click="play">
                    Play
                </button>
            </div>
            <div class="block_mise">
                <div class="block_mise_1">
                    <Case
                        v-for="bet in bets"
                        :key="bet.id"
                        class="block_mise_1_item"
                        :style="{
                            '--grid-col': bet.gridCol,
                            '--grid-row': bet.gridRow,
                        }"
                        :title="bet.title"
                        :background-color="bet.backgroundColor"
                        :value="bet.value"
                        :highlight="bet.condition(wheel)"
                        @click="bet.incrementValue(typeOfBetSelected)"
                        @click_right="bet.decrementValue(typeOfBetSelected)"
                    >
                    </Case>
                </div>
            </div>
            <div class="block_somme">
                <div
                    class="block_somme_item"
                    v-for="item in typeOfBet"
                    :key="item"
                    :style="{
                        backgroundColor:
                            item === typeOfBetSelected ? '#2df317' : '',
                    }"
                    @click="typeOfBetSelected = item"
                >
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Bet from "@/class/bet";
    import Case from "@/components/Case.vue";
    import { Getter } from "vuex-class";
    import { Component, Vue } from "vue-property-decorator";
    import { EMutation, store } from "@/store";

    @Component({
        components: { case: Case },
    })
    export default class BoardGame extends Vue {

        public redNumber = [
            1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
        ];

        public typeOfBet = [1, 5, 25, 100];

        /** VARIABLE */
        public bets = [
            new Bet(
                0,
                "0",
                36,
                "1",
                "1/4",
                "green",
                0,
                (val: number): boolean => val > 0 && val < 13
            ),
            new Bet(
                48,
                "1st 12",
                3,
                "2 / 6",
                "",
                "green",
                0,
                (val: number): boolean => val > 0 && val < 13
            ),
            new Bet(
                49,
                "2nd 12",
                3,
                "6/10",
                "",
                "green",
                0,
                (val: number): boolean => val > 12 && val < 25
            ),
            new Bet(
                37,
                "3rd 12",
                3,
                "10/14",
                "",
                "green",
                0,
                (val: number): boolean => val > 24
            ),
            new Bet(
                38,
                "1 To 18",
                2,
                "2/4",
                "",
                "green",
                0,
                (val: number): boolean => val > 0 && val < 18
            ),
            new Bet(
                39,
                "EVEN",
                2,
                "4/6",
                "",
                "green",
                0,
                (val: number): boolean => val % 2 === 0
            ),
            new Bet(40, "R", 2, "6/8", "", "red", 0, (val: number): boolean =>
                this.red_number.includes(val)
            ),
            new Bet(
                41,
                "B",
                2,
                "8/10",
                "",
                "black",
                0,
                (val: number): boolean => !this.red_number.includes(val)
            ),
            new Bet(
                42,
                "ODD",
                2,
                "10/12",
                "",
                "green",
                0,
                (val: number): boolean => val % 2 === 1
            ),
            new Bet(
                43,
                "19 To 36",
                2,
                "12/14",
                "",
                "green",
                0,
                (val: number): boolean => val >= 19
            ),
            new Bet(
                44,
                "2to1",
                3,
                "14",
                "1",
                "green",
                0,
                (val: number): boolean => val % 3 === 0
            ),
            new Bet(
                45,
                "2to1",
                3,
                "14",
                "2",
                "green",
                0,
                (val: number): boolean => (val + 1) % 3 === 0
            ),
            new Bet(
                46,
                "2to1",
                3,
                "14",
                "3",
                "green",
                0,
                (val: number): boolean => (val + 2) % 3 === 0
            ),
        ];
        @Getter("getMoney") public money!: () => number;
        public wheel = 0;
        public earnings = [];
        public typeOfBetSelected = 1;
        public playButtonStyle = { visibility: "" };
        public wheelStyle = "";

        public mounted(): void {
            // initializes boxes from 1 to 36 automatically
            const ROW = 3;
            const COL = 36;
            for (let row = 1; row <= ROW; row += 1) {
                for (let col = ROW + 1 - row; col <= COL; col += ROW) {
                    this.bets.push(
                        new Bet(
                            col,
                            col.toString(),
                            COL,
                            ((col + ROW) / ROW).toString(),
                            row.toString(),
                            this.redNumber.includes(col) ? "red" : "black",
                            0,
                            (val) => val === col
                        )
                    );
                }
            }
        }

        /** Run the wheel */
        public play(): void {
            this.wheelStyle = "roulette_img";
            this.playButtonStyle.visibility = "hidden";
            const DELAY_HIDDEN_PLAY_BUTTON = 1800;
            const DELAY_RESULT = 500;

            setTimeout((): void => {
                this.playButtonStyle.visibility = "";
            }, DELAY_HIDDEN_PLAY_BUTTON);
            setTimeout(
                async (): Promise<void> => this.calculateResults(),
                DELAY_RESULT
            );
        }

        private async calculateResults(): Promise<void> {
            const NUMBER_NUM_WHEEL = 36;
            this.wheelStyle = "";
            this.wheel = Math.floor(Math.random() * (NUMBER_NUM_WHEEL + 1));
            const results = [];
            for (const bet of this.bets) {
                results.push(bet.result(this.wheel));
            }
            const tab = await Promise.all(results);
            const GAIN = tab.reduce(
                (accumulator, curr): number => accumulator + curr
            );
            store.commit(EMutation.IncrementMoney, GAIN);
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

    .header {
        margin-top: 20px;
        width: 100%;
        height: 8vh;
        font-size: 40px;
    }

    .gains {
        display: flex;
        flex-wrap: nowrap;
        justify-content: left;
        overflow: hidden;
        height: 7vh;
    }

    .gain {
        border: black 1px solid;
        padding: 5px;
        border-radius: 4px;
        min-width: 45px;
    }

    .block_body {
        width: 100%;
        display: flex;
    }

    .block_roulette {
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 10px;
        flex: 1;
        height: 50vh;
        align-items: center;
    }

    .block_mise {
        display: flex;
        padding: 10px;
        margin: 100px 10px 10px;
        flex: 3;
        height: 50vh;
    }

    .block_somme {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: end;
    }

    .block_somme_item {
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

    .block_mise_1 {
        display: grid;
        grid-template-columns: repeat(14, 1fr);
        justify-items: stretch;
        align-items: stretch;
        justify-content: stretch;
        align-content: center;
        color: white;
        background-color: green;
        height: 80px;
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

    .block_mise_1_item:hover,
    .block_somme_item:hover {
        background-color: #2df317;
    }

    .roulette {
        display: inline-block;
        color: white;
        width: 200px;
        height: 200px;
        background-color: aquamarine;
        border-radius: 50%;
        text-align: center;
        line-height: 3em;
        font-size: 4em;
    }

    .roulette_img {
        /*background-image: url("@/assets/roulette.png");*/
        background-size: cover;
        animation: spin 0.5s linear infinite;
        color: transparent;
    }

    @-moz-keyframes spin {
        100% {
            -moz-transform: rotate(360deg);
        }
    }

    @-webkit-keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .play {
        border: black 1px solid;
        height: 35px;
        width: 80%;
        border-radius: 5px;
        font-size: large;
        margin-top: 20px;
    }
</style>
