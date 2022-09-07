<template>
    <div class="v-round">
        <div>
            {{ earning }}
        </div>

        <div class="number" :style="style">
            <div class="number-center">{{ round.wheelNumber }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { IDict } from "@/utils/interfaces";
    import { PropType } from "vue";
    import { redNumber } from "@/configs/cells-config";
    import { Round } from "@/models/round";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class extends Vue {
        @Prop({ required: true, type: Object as PropType<Round> })
        protected readonly round!: Round;

        protected get earning(): string {
            return `${this.round.gain > 0 ? "➕" : "➖"} ${Math.abs(
                this.round.gain
            )} (${this.round.money}$)`;
        }

        protected get backgroundColor(): string {
            if (this.round.wheelNumber === 0) {
                return "green";
            }
            return redNumber.includes(this.round.wheelNumber) ? "red" : "black";
        }

        protected get style(): IDict<string> {
            return {
                "--bg-color": `var(--${this.backgroundColor})`,
            };
        }
    }
</script>

<style scoped>
    .v-round {
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
