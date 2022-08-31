<template>
    <v-list :items="gains" :height="height">
        <template #item="{ item: gain }">
            <v-gain :gain="gain" />
        </template>
    </v-list>
</template>

<script lang="ts">
    import { Gain } from "@/models/gain";
    import { State } from "vuex-class";
    import { VGain } from "@/components/roulette/index";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: { "v-gain": VGain },
    })
    export default class VGainHistory extends Vue {
        @State protected readonly gains!: Gain[];

        public height = "5vh";
    }
</script>
<style scoped></style>
