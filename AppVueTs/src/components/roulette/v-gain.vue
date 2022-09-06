<template>
    <div v-show="show" class="gain">
        {{ earning }}
    </div>
</template>

<script lang="ts">
    import { Gain } from "@/models/gain";
    import { PropType } from "vue";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class VGain extends Vue {
        @Prop({ required: true, type: Object as PropType<Gain> })
        protected readonly gain!: Gain;

        protected show = false;

        public mounted(): void {
            this.show = true;
        }

        protected get earning(): string {
            return `${this.gain.gain > 0 ? "➕" : "➖"} ${Math.abs(
                this.gain.gain
            )}`;
        }
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .gain {
        border: black 1px solid;
        padding: 5px;
        border-radius: 4px;
        min-width: 45px;
        margin-left: 5px;
    }
</style>
