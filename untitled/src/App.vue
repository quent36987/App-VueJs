
<script setup>
import { ref, onMounted } from 'vue'



const money = ref(5)
const red = ref(0)
const roulette = ref(0)



function RedIncrement()
{
  if(money.value > 0)
  {
    red.value++
    money.value--
  }

}

function PlayRoulette() {
  //lance la roulette et cherche un nombre aleatoire
  var nombre = Math.floor(Math.random() * (36));
  roulette.value = nombre

  //calcul des gains
  var gain = 0;
  if(nombre % 2 == 0){
    // black
  }
  else {
    gain += red.value *2;
  }

  //reset les valeurs des mises
  red.value = 0;

  console.log("Gain de ",gain);
  money.value += gain;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${money.value}.`)
})
</script>

<template>
  <span >Money : {{money}}</span>
  <span >Roulette : {{roulette}}</span>
  <button @click="RedIncrement">red is: {{ red }}</button>
  <button @click="PlayRoulette">Play</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
