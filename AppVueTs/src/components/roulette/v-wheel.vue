<template>
    <div class="block-roulette">
        <div class="roulette" :style="styleWheel">
            {{ wheelNumber }}
        </div>

        <button
            v-show="playButtonHidden"
            class="play"
            @click="$emit('on-click')"
        >
            Play
        </button>
    </div>
</template>

<script lang="ts">
    import { IDict } from "@/utils/interfaces";
    import { redNumber } from "@/configs/case-config";
    import { State } from "vuex-class";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class VWheel extends Vue {
        @Prop({ required: true, type: Boolean })
        protected readonly playButtonHidden!: boolean;

        @State protected readonly wheelNumber!: number;

        protected get wheelColor(): string {
            if (this.wheelNumber === 0) {
                return "green";
            }

            return redNumber.includes(this.wheelNumber) ? "red" : "black";
        }

        protected get styleWheel(): IDict<string> {
            return {
                "--bg-color": `var(--${this.wheelColor})`,
            };
        }
    }
</script>

<style scoped>
    .block-roulette {
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
