<script setup>
import {ref, onMounted} from 'vue'


const money = ref(10)
const roulette = ref(0)
const gains = ref([])
const typeOfMiseSelected = ref(1)

const mises = ref([
  {id: 1, title: '1st 12', value: 0, gain: 3, span: '1 / 3', back: 'green', win:false,  condition: (val) => val > 0 && val < 13} ,
  {id: 2, title: '2nd 12', value: 0, gain: 3, span: '3/5',back: 'green', win:false, condition: (val) => val > 12 && val < 25},
  {id: 3, title: '3rd 12', value: 0, gain: 3, span: '5/7',back: 'green',win:false,  condition: (val) => val > 24},
  {id: 4, title: '1 To 18', value: 0, gain: 2, span: '1',back: 'green',win:false,  condition: (val) => val > 0 && val < 18},
  {id: 5, title: 'EVEN', value: 0, gain: 2, span: '2',back: 'green', win:false, condition: (val) => val % 2 == 0},
  {id: 6, title: 'R', value: 0, gain: 2, span: '3',back: 'red', win:false, condition: (val) => red_number.includes(val)},
  {id: 7, title: 'B', value: 0, gain: 2, span: '4',back: 'black', win:false, condition: (val) => !red_number.includes(val)},
  {id: 8, title: 'ODD', value: 0, gain: 2, span: '5',back: 'green',win:false,  condition: (val) => val % 2 == 1},
  {id: 9, title: '19 To 36', value: 0, gain: 2, span: '6',back: 'green', win:false, condition: (val) => val >= 19},
])
const red_number = [
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36
]
const typeOfMise = [1,5,25,100]


function Increment(ref_mise) {
  if (money.value >= typeOfMiseSelected.value) {
    ref_mise.value+=typeOfMiseSelected.value
    money.value-=typeOfMiseSelected.value
  }
}
function Decrement(ref_mise) {
  if (ref_mise.value >= typeOfMiseSelected.value) {
    ref_mise.value-=typeOfMiseSelected.value
    money.value+=typeOfMiseSelected.value
  }
}

function PlayRoulette() {
  //lance la roulette et cherche un nombre aleatoire
  var nombre = Math.floor(Math.random() * (36));
  roulette.value = nombre

  var gain = 0;
  mises.value.forEach((mise) => {
    if (mise.condition(nombre)) {
      gain += mise.value * mise.gain;
      money.value += mise.value * mise.gain;
    }
    gain -= mise.value
    mise.value = 0
  })
  gains.value.unshift(gain)
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${money.value}.`)
})
</script>

<template>
  <div class="header">
    <span>{{ money }} 💲</span>
  </div>
  <div class="gains">
    <ul v-for="gain in gains" :key="gain">
      <div class="gain">
        {{ gain > 0 ? "➕" : "➖" }}
        {{ Math.abs(gain) }}
      </div>
    </ul>
  </div>
  <div class="block_body">
    <div class="block_roulette">
      <div class="roulette" :style="{ backgroundColor : red_number.includes(roulette) ? 'red' : 'black' }">
        <span>{{ roulette }}</span>
      </div>
      <button class="play" @click="PlayRoulette">Play</button>
    </div>
    <div class="block_mise">
      <ul class="block_mise_1">
        <div
            v-for="mise in mises"
            :key="mise.id"
            @click="Increment(mise)"
            v-on:click.right =  "Decrement(mise)"
            class="block_mise_1_item"
            :style="{gridColumn: mise.span ? mise.span : '', backgroundColor: mise.back}"
        >
          <div>{{ mise.title }}</div>
          <div
              class="block_mise_1_item_val"
              v-if="mise.value > 0"
          >{{ mise.value }}
          </div>
        </div>
      </ul>
    </div>
    <div class="block_somme">
        <div
            class="block_somme_item"
            v-for="item in typeOfMise"
            :key="item"
            :style="{backgroundColor: item == typeOfMiseSelected ? '#2df317' : ''}"
            @click="typeOfMiseSelected = item"
        >
         {{item}}
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
  color: white;
  background-color: green;
  border: #1df387 6px solid;
  user-select: none;

}

.header {
  margin-top: 20px;
  width: 100%;
  height: 8vh;
  font-size: 40px;
}

.gains {
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  overflow: hidden;
  height: 7vh;
}

.gain {
  border: black 1px solid;
  padding: 5px;
  border-radius: 4px;
  min-width: 45px;
}

.block_body {
  width: 100%;
  display: flex;
}

.block_roulette {
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  flex: 1;
  height: 50vh;
  align-items: center;
}

.block_mise {
  display: flex;
  padding: 10px;
  margin: 10px;

  flex: 3;
  height: 50vh;
}
.block_somme{
  flex : 1;
  display:flex;
  flex-direction: column;
  justify-items: center;
  align-items: end;
}
.block_somme_item
{
  height: 50px;
  width: 50px;
  margin-bottom: 25px;
  font-size: 24px;
  border-radius: 25px;
  border: black 2px dashed;
  margin-right: 25px;
  font-weight: bold;
  padding: 10px;
}
.block_mise_1 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: stretch;
  align-items: stretch;
  justify-content: stretch;
  align-content: center;
  color: white;
  background-color: green;
  height: 80px;
  width: 100%;
  font-size: 25px;
  font-weight: bold;
}

.block_mise_1_item {
  height: 40px;
  border: white 1px solid;
}

.block_mise_1_item:hover , .block_somme_item:hover {
  background-color: #2df317;
}

.block_mise_1_item_val {
  background-color: cadetblue;
  width: 25px;
  height: 25px;
  border-radius: 10px;
  border: black 2px dashed;
  font-size: 15px;
  position: relative;
  left: 40%;
  bottom: 55%;
}

.roulette {
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

.play {
  border: black 1px solid;
  height: 35px;
  width: 80%;
  border-radius: 5px;
  font-size: large;
  margin-top: 20px;
}
</style>
