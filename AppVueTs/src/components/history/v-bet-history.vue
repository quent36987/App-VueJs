<template>
    <div class="container">
        <div>
            {{ textGain }}
        </div>
        <div class="number" :style="style">
            <div class="number_center">{{ gain.value }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import Gain from "@/class/gain";
    import { IDict } from "@/utils/interfaces";
    import { redNumber } from "@/class/config-bet";
    import { Component, Prop, Vue } from "vue-property-decorator";
    @Component
    export default class VBetHistory extends Vue {
        @Prop() protected readonly gain!: Gain;

        protected get textGain(): string {
            return `${this.gain.gain > 0 ? "➕" : "➖"} ${Math.abs(
                this.gain.gain
            )}`;
        }

        private bgColor(): string {
            if (this.gain.value === 0) {
                return "green";
            }
            if (redNumber.includes(this.gain.value)) {
                return "red";
            }
            return "black";
        }

        protected get style(): IDict<string> {
            return {
                "--bg-color": `var(--${this.bgColor()})`,
            };
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-bottom: 5px;
    }
    .number_center {
        margin: auto;
    }
    .number {
        --bg-color: pink;
        background-color: var(--bg-color);
        color: white;
        border-radius: 100%;
        height: 30px;
        width: 30px;
        display: flex;
    }
</style>
