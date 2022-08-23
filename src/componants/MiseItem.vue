<template>
  <div>{{title}}-{{value}}</div>
</template>

<script>
export default {
  props:[
      'title',
      'value'
  ],
  name: "MiseItem",
  setup(props) {
    console.log(props.title)
  }

}




</script>

<style scoped>

</style>