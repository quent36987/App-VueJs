<template>
    <div class="v-gain">
        {{ earning }}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class extends Vue {
        @Prop({ required: true, type: Number })
        protected readonly gain!: number;

        protected get earning(): string {
            return `${this.gain > 0 ? "➕" : "➖"} ${Math.abs(this.gain)}`;
        }
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .v-gain {
        min-width: 45px;

        border: black 1px solid;
        padding: 5px;
        border-radius: 4px;
        margin-left: 5px;
    }
</style>
