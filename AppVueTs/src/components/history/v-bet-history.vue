<template>
    <div class="container">
        <div>
            {{ earning }}
        </div>

        <div class="number" :style="style">
            <div class="number-center">{{ gain.value }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Gain } from "@/models/gain";
    import { IDict } from "@/utils/interfaces";
    import { PropType } from "vue";
    import { redNumber } from "@/configs/case-config";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class VBetHistory extends Vue {
        @Prop({ required: true, type: Object as PropType<Gain> })
        protected readonly gain!: Gain;

        protected get earning(): string {
            return `${this.gain.gain > 0 ? "➕" : "➖"} ${Math.abs(
                this.gain.gain
            )} (${this.gain.money}$)`;
        }

        protected get backgroundColor(): string {
            if (this.gain.value === 0) {
                return "green";
            }
            return redNumber.includes(this.gain.value) ? "red" : "black";
        }

        protected get style(): IDict<string> {
            return {
                "--bg-color": `var(--${this.backgroundColor})`,
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

    .number-center {
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
