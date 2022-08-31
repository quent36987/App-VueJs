<template>
    <div class="gain">
        {{ textGain }}
    </div>
</template>

<script lang="ts">
    import { Gain } from "@/models/gain";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class VGain extends Vue {
        @Prop() protected readonly gain!: Gain;

        protected get textGain(): string {
            return `${this.gain.gain > 0 ? "➕" : "➖"} ${Math.abs(
                this.gain.gain
            )}`;
        }
    }
</script>

<style scoped>
    .gain {
        border: black 1px solid;
        padding: 5px;
        border-radius: 4px;
        min-width: 45px;
        margin-left: 5px;
    }
</style>
