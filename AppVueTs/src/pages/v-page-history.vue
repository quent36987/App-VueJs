<template>
    <div>
        <v-bet-history v-for="gain in gains" :key="gain.id" :gain="gain" />
    </div>
</template>
<script lang="ts">
    import Gain from "@/class/gain";
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
    }
</script>
