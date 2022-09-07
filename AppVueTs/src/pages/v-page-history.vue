<template>
    <v-rounds-history />
</template>

<script lang="ts">
    import { VRoundsHistory } from "@/components/history";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: {
            "v-rounds-history": VRoundsHistory,
        },
    })
    export default class extends Vue {}
</script>

<style scoped></style>
