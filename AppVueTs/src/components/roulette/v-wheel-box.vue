<template>
    <div class="v-wheel-box">
        <div class="wheel" :style="styleWheel">
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

        protected get styleWheel(): IDict<string> {
            return {
                "--bg-color": `var(--${this.wheelColor})`,
            };
        }
    }
</script>

<style scoped>
    .v-wheel-box {
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 10px;
        flex: 1;
        height: 50vh;
        align-items: center;
    }

    .wheel {
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

    .button {
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
