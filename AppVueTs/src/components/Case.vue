<template>
  <div
    :style="{
      backgroundColor: this.backgroundColor,
    }"
    @click="Increment"
  >
    {{ title }}
    <div class="block_mise_1_item_val" v-if="this.value > 0">
      {{ this.value }}

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Case extends Vue {
  @Prop({ required: true }) private id!: number;
  @Prop() private title!: string;
  @Prop() private erning!: number;
  @Prop() private backgroundColor!: string;

  private value = 0;

  Result(val: number) {
    console.log("oura !");
    this.value = 0;
  }

  Increment() {
    if (this.$store.getters.getMoney() > 0) {
      this.$store.commit("increment", -1);
      this.$store.commit("addBet", { id: this.id, val: 1 });
      this.value++;
    }
    console.log(this.$store.state.money);
  }
}
</script>

<style scoped>
.block_mise_1_item_val {
  background-color: cadetblue;
  width: 25px;
  height: 25px;
  border-radius: 10px;
  border: black 2px dashed;
  font-size: 15px;
  position: absolute;
}
</style>
