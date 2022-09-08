<template>
    <v-list :items="rounds" height="5vh">
        <template #item="{ item: round }">
            <v-gain :gain="round.gain" />
        </template>
    </v-list>
</template>

<script lang="ts">
    import { Round } from "@/models/round";
    import { State } from "vuex-class";
    import { VGain } from "@/components/roulette/index";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: { "v-gain": VGain },
    })
    export default class extends Vue {
        @State protected readonly rounds!: Round[];
    }
</script>

<style scoped></style>
