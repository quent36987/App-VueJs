<template>
    <v-list :items="rounds" column>
        <template #item="{ item: round }">
            <v-round :round="round" />
        </template>
    </v-list>
</template>

<script lang="ts">
    import { Round } from "@/models/round";
    import { State } from "vuex-class";
    import { VRound } from "@/components/history";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: {
            "v-round": VRound,
        },
    })
    export default class extends Vue {
        @State protected readonly rounds!: Round[];
    }
</script>

<style scoped></style>
