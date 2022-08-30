<template>
    <div class="block_somme">
      <slot></slot>



      <v-list>
        <v-token
          v-for="token in tokenList"
          :key="token"
          :value="token"
          @click="pickToken(token)"
        />
      </v-list>


      <v-list :items="tokenList" />


      <v-list :items="tokenList" >
        <v-token />
      </v-list>
    </div>
</template>

<script lang="ts">
    import { State } from "vuex-class";
    import { VToken } from "@/components/roulette/index";
    import { Component, Vue } from "vue-property-decorator";
    import { EMutation, store } from "@/store";

    @Component({ components: { "v-token": VToken } })
    export default class VTokenList extends Vue {
        @State protected readonly tokenList!: number[];

        public pickToken(token: number): void {
            store.commit(EMutation.PickToken, token);
        }
    }
</script>

<style scoped>
    .block_somme {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: end;
    }
</style>
