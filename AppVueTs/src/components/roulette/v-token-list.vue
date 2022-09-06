<template>
    <v-list
        :items="tokenList"
        :flexDirection="flexDirection"
        :wight="wight"
        @on-click="pickToken($event.value)"
    >
        <template #item="{ item: token }">
            <v-token :value="token.value" @on-click="pickToken(token.value)" />
        </template>
    </v-list>
</template>

<script lang="ts">
    import { State } from "vuex-class";
    import { VToken } from "@/components/roulette/index";
    import { Component, Vue } from "vue-property-decorator";
    import { EMutation, store } from "@/store";

    @Component({ components: { "v-token": VToken } })
    export default class VTokenList extends Vue {
        @State protected readonly tokenList!: { id: number; value: number }[];

        protected flexDirection = "column";
        protected wight = "10%";

        protected pickToken(tokenValue: number): void {
            store.commit(EMutation.PickToken, tokenValue);
        }
    }
</script>

<style scoped></style>
