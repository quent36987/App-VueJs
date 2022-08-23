
<script setup>
import { ref, onMounted } from 'vue'



const money = ref(5)
const roulette = ref(0)
const gains = [];

const colors = ref('red');

const mises = {
  red : ref(0),
  black : ref(0),
  even : ref(0),
  odd : ref(0),
  first_18 : ref(0),
  end_19 : ref(0),
}

const red_number = [
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36
]



function Increment(ref_mise)
{
  console.log(mises)
  if(money.value > 0)
  {
    ref_mise.value++
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
    gain +=  mises.even.value * 2;
  }
  else{
    gain += mises.odd.value *2
  }
  if(red_number.includes(nombre)){
    gain += mises.red.value *2
    colors.value = 'red'
  }
  else{
    gain += mises.black.value *2
    colors.value = 'black'
  }
  if(nombre < 19){
    gain += mises.first_18.value *2
  }
  else{
    gain += mises.end_19.value *2
  }

  //reset all mises
  for(var key in mises)
  {
    mises[key].value = 0
  }

  console.log("Gain de ",gain);
  money.value += gain;
  gains.push(gain);

}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${money.value}.`)
})
</script>

<template>
  <div class="header">
    <span>{{money}} 💲</span>
  </div>
  <div class="gains">
    <span>Gains : {{gains}}</span>
  </div>
  <div class="block_body">
    <div class="block_roulette">
      <div class="roulette" :class="{color : colors}">
        <span>{{roulette}}</span>
      </div>
      <button class="play" @click="PlayRoulette">Play</button>
    </div>
    <div class="block_mise">
      <div class="block_mise_1">
        <div class="block_mise_1_item" 
          @click="Increment(mises.first_18)"
          >1 to 18</div>
        <div class="block_mise_1_item"
          @click="Increment(mises.even)"
        >EVEN</div>
        <div class="block_mise_1_item"
          @click="Increment(mises.red)"
          >🔴</div>
        <div class="block_mise_1_item"
          @click="Increment(mises.black)"
          >⚫</div>
        <div class="block_mise_1_item"
          @click="Increment(mises.odd)"
          >ODD</div>
        <div class="block_mise_1_item"
          @click="Increment(mises.end_19)"
          >19 to 36</div>
      </div>
    </div>
  </div>

  
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
    height: 8vh;
    
    font-size: 40px;
    
}
.block_body
{
  width: 100%;

  display: flex;
  
}
.block_roulette
{
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  
  flex : 1;
  height: 50vh;
  align-items: center;
}
.block_mise
{
  display: flex;
  padding: 10px;
  margin: 10px;
  
  flex:3;
  height: 50vh;
}
.block_mise_1
{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  justify-content: stretch;
  align-content: center;
  color: white;
  background-color: green;
  height: 50px;
  width: 100%;
  font-size: 25px;
  font-weight: bold;
}
.block_mise_1_item{
  height: 100%;
}
.block_mise_1_item:hover{
  background-color: #2df317;
}
.roulette
{
  display: inline-block;
  color: white;
  width: 200px;
  height: 200px;
  background-color: aquamarine;
  border-radius: 50%;
  text-align: center;
  line-height: 3em;
  font-size: 4em;
}
.play
{
  border: black 1px solid;
  height: 35px;
  width: 80%;
  border-radius: 5px;
  font-size: large;
  margin-top: 20px;
}
</style>
