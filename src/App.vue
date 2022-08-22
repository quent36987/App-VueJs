
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
  <div class="header">
    <span >Money : {{money}}</span>
  </div>
  <div class="block_body">
    <div class="block_roulette">
      <div class="roulette">

      </div>
      <div class="play">

      </div>
    </div>
    <div class="block_mise">
      <div class="block_mise_1">

      </div>
    </div>
  </div>

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
}
.header
{
    width: 100%;
    height: 10vh;
    border: black 1px solid;
}
.block_body
{
  width: 100%;

  display: flex;
  border: black 1px solid;
}
.block_roulette
{
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  border: black 1px solid;
  flex : 1;
  height: 50vh;
  align-items: center;
}
.block_mise
{
  display: flex;
  padding: 10px;
  margin: 10px;
  border: black 1px solid;
  flex:3;
  height: 50vh;
}
.roulette
{
  isplay: inline-block;
  margin: 30px;
  color: white;
  background-color: #69A3B9;
  width: 100px;
  height: 100px;
  border: black 1px solid;
  border-radius: 50%;
  text-align: center;
  line-height: 3em;
  font-size: 2em;
}
.play
{
  border: black 1px solid;
  height: 35px;
  width: 80%;
}
</style>
