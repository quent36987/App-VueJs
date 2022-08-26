<template>
  <div
    @click="$emit('click')"
    @contextmenu.prevent
    @click.right="$emit('click_right')"
    :style="{
      backgroundColor: backgroundColor,
    }"
  >
    {{ title }}
    <div class="block_mise_1_item_val" v-if="value > 0">
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Case extends Vue {
  @Prop() private title!: string;
  @Prop() private backgroundColor!: string;
  @Prop() private value!: number;
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
