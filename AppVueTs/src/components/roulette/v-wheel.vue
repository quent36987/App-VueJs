<template>
    <div class="block_roulette">
        <div class="roulette" :style="styleButton">
            {{ wheelNumber }}
        </div>
        <button class="play" :style="styleWheel" @click="$emit('click')">
            Play
        </button>
    </div>
</template>

<script lang="ts">
    import { IDict } from "@/utils/interfaces";
    import { redNumber } from "@/class/config-bet";
    import { State } from "vuex-class";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class VWheel extends Vue {
        @Prop() protected readonly playButtonHidden!: boolean;
        @State protected readonly wheelNumber!: number;

        public wheelColor(): string {
            if (this.wheelNumber === 0) {
                return "green";
            }
            return redNumber.includes(this.wheelNumber) ? "red" : "black";
        }

        protected get styleButton(): IDict<string> {
            return {
                "--bg-color": `var(--${this.wheelColor()})`,
            };
        }

        protected get styleWheel(): IDict<string> {
            return {
                "--hidden": this.playButtonHidden ? "" : "hidden",
            };
        }
    }
</script>

<style scoped>
    .block_roulette {
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 10px;
        flex: 1;
        height: 50vh;
        align-items: center;
    }

    .roulette {
        --bg-color: pink;
        background-color: var(--bg-color);

        display: inline-block;
        color: white;
        width: 200px;
        height: 200px;

        border-radius: 50%;
        text-align: center;
        line-height: 3em;
        font-size: 4em;
    }
    .play {
        --hidden: none;
        visibility: var(--hidden);
        border: black 1px solid;
        height: 35px;
        width: 80%;
        border-radius: 5px;
        font-size: large;
        margin-top: 20px;
    }
</style>