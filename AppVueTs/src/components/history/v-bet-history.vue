<template>
    <div>
        {{ gain.gain > 0 ? "➕" : "➖" }}
        {{ Math.abs(gain.gain) }}
      {{" number : " +  gain.value}}
    </div>
</template>

<script lang="ts">
    import Gain from "@/class/gain";
    import { Component, Prop, Vue } from "vue-property-decorator";
    @Component
    export default class VBetHistory extends Vue {
        @Prop() protected readonly gain!: Gain;
    }
</script>

<style scoped></style>
