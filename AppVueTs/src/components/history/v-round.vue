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
            const PREFIX_GAIN = this.round.gain > 0 ? "➕" : "➖";
            const GAIN_ABS = Math.abs(this.round.gain);

            return `${PREFIX_GAIN} ${GAIN_ABS} (${this.round.money}$)`;
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
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin-bottom: 5px;

        gap: 10px;
    }

    .number-center {
        margin: auto;
    }

    .number {
        --bg-color: pink;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        height: 30px;
        width: 30px;

        background-color: var(--bg-color);
        color: white;
        border-radius: 100%;
    }
</style>
