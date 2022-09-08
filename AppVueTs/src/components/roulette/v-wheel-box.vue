<template>
    <div class="v-wheel-box">
        <div class="wheel" :style="style">
            {{ wheelNumber }}
        </div>

        <button v-show="showButton" class="button" @click="$emit('click')">
            Play
        </button>
    </div>
</template>

<script lang="ts">
    import { IDict } from "@/utils/interfaces";
    import { redNumber } from "@/configs/cells-config";
    import { State } from "vuex-class";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class extends Vue {
        @Prop({ required: true, type: Boolean })
        protected readonly showButton!: boolean;

        @State protected readonly wheelNumber!: number;

        protected get wheelColor(): string {
            if (this.wheelNumber === 0) {
                return "green";
            }

            return redNumber.includes(this.wheelNumber) ? "red" : "black";
        }

        protected get style(): IDict<string> {
            return {
                "--bg-color": `var(--${this.wheelColor})`,
            };
        }
    }
</script>

<style scoped>
    .v-wheel-box {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;

        height: 50vh;
        padding: 10px;
        margin: 10px;
    }

    .wheel {
        --bg-color: pink;

        display: inline-block;

        width: 200px;
        height: 200px;

        background-color: var(--bg-color);
        border-radius: 50%;
        color: white;
        font-size: 4em;
        line-height: 3em;
        text-align: center;
    }

    .button {
        --hidden: none;

        height: 35px;
        width: 80%;

        border-radius: 5px;
        border: black 1px solid;
        font-size: large;
        margin-top: 20px;
        visibility: var(--hidden);
    }
</style>
