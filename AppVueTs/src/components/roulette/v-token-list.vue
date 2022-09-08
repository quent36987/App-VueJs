<template>
    <v-list :items="tokens" column wight="10%">
        <template #item="{ item: token }">
            <v-token :value="token.value" @click="pickToken(token.value)" />
        </template>
    </v-list>
</template>

<script lang="ts">
    import { IToken } from "@/utils/interfaces";
    import { State } from "vuex-class";
    import { VToken } from "@/components/roulette/index";
    import { Component, Vue } from "vue-property-decorator";
    import { EMutation, store } from "@/store";

    @Component({ components: { "v-token": VToken } })
    export default class extends Vue {
        @State protected readonly tokens!: IToken[];

        protected pickToken(tokenValue: number): void {
            store.commit(EMutation.PickToken, tokenValue);
        }
    }
</script>

<style scoped></style>
