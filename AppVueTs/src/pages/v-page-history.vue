<template>
    <div>
        <nav>
            <router-link to="/roulette">Roulette</router-link> |
            <router-link to="/history">Historique</router-link>
        </nav>
        <v-list :items="gains" :flexDirection="flexDirection">
            <template #item="{ item: gain }">
                <v-bet-history :gain="gain" />
            </template>
        </v-list>
    </div>
</template>

<script lang="ts">
    import { Gain } from "@/models/gain";
    import { State } from "vuex-class";
    import { VBetHistory } from "@/components/history";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: {
            "v-bet-history": VBetHistory,
        },
    })
    export default class VPageHistory extends Vue {
        @State protected readonly gains!: Gain[];

        public flexDirection = "column";
    }
</script>