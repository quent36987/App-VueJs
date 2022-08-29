<template>
    <div class="gains">
        <v-gain v-for="gain in gains" :key="gain.value" :value="gain.gain">
        </v-gain>
    </div>
</template>

<script lang="ts">
    import Gain from "@/class/gain";
    import { State } from "vuex-class";
    import { VGain } from "@/components/index";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: { "v-gain": VGain },
    })
    export default class VGainHistory extends Vue {
        @State protected readonly gains!: Gain[];
    }
</script>
<style scoped>
    .gains {
        display: flex;
        flex-wrap: nowrap;
        justify-content: left;
        overflow: hidden;
        height: 6vh;
    }
</style>
