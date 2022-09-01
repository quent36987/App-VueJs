<template>
  <div class="App">
    <form @submit.prevent="submitToken">
      <input type="text" placeholder="Enter token" v-model="token" />
      <button type="submit">Submit</button>
    </form>
  </div>
  <div class="app">
    <div class="header">
      <span>{{ money }} 💲</span>
    </div>
    <div class="gains">
      <ul v-for="gain in earnings" :key="gain">
        <div class="gain">
          {{ gain > 0 ? "➕" : "➖" }}
          {{ Math.abs(gain) }}
        </div>
      </ul>
    </div>
    <div class="block_body">
      <div class="block_roulette" >
        <div class="roulette" :style="{ backgroundColor : red_number.includes(wheel) ? 'red' : 'black' }">
          <div :class="wheelStyle">
            <span>{{ wheel }}</span>
          </div>
        </div>
        <button  class="play" :style="playButtonStyle" @click="Play"
        >Play</button>
      </div>
      <div class="block_mise">
        <ul class="block_mise_1">
          <div
              v-for="mise in bets"
              :key="mise.id"
              @click="Increment(mise)"
              v-on:click.right="Decrement(mise)"
              class="block_mise_1_item"
              :style="{gridColumn: mise.gridCol ? mise.gridCol : '',
                       gridRow:mise.gridRow ? mise.gridRow : '',
                       backgroundColor: mise.back}"
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
            v-for="item in typeOfBet"
            :key="item"
            :style="{backgroundColor: item === typeOfBetSelected ? '#2df317' : ''}"
            @click="typeOfBetSelected = item"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onBeforeUnmount,ref,onMounted} from 'vue'
import SocketioService from './services/socketio.service.js';

const    token = ref('')

/*** PARAM ***/
const red_number = [
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36
]
const typeOfBet = [1, 5, 25, 100]
const bets = ref([
  {
    id: 0,
    title: '0',
    value: 0,
    gain: 36,
    gridCol: '1',
    gridRow: '1/4',
    back: 'green',
    condition: (val) => val > 0 && val < 13
  },
  {
    id: 35,
    title: '1st 12',
    value: 0,
    gain: 3,
    gridCol: '2 / 6',
    back: 'green',
    condition: (val) => val > 0 && val < 13
  },
  {
    id: 36,
    title: '2nd 12',
    value: 0,
    gain: 3,
    gridCol: '6/10',
    back: 'green',
    condition: (val) => val > 12 && val < 25
  },
  {id: 37, title: '3rd 12', value: 0, gain: 3, gridCol: '10/14', back: 'green', condition: (val) => val > 24},
  {id: 38, title: '1 To 18', value: 0, gain: 2, gridCol: '2/4', back: 'green', condition: (val) => val > 0 && val < 18},
  {id: 39, title: 'EVEN', value: 0, gain: 2, gridCol: '4/6', back: 'green', condition: (val) => val % 2 === 0},
  {id: 40, title: 'R', value: 0, gain: 2, gridCol: '6/8', back: 'red', condition: (val) => red_number.includes(val)},
  {
    id: 41,
    title: 'B',
    value: 0,
    gain: 2,
    gridCol: '8/10',
    back: 'black',
    condition: (val) => !red_number.includes(val)
  },
  {id: 42, title: 'ODD', value: 0, gain: 2, gridCol: '10/12', back: 'green', condition: (val) => val % 2 === 1},
  {id: 43, title: '19 To 36', value: 0, gain: 2, gridCol: '12/14', back: 'green', condition: (val) => val >= 19},
  {
    id: 44,
    title: '2to1',
    value: 0,
    gain: 3,
    gridCol: '14',
    gridRow: '1',
    back: 'green',
    condition: (val) => val % 3 === 0
  },
  {
    id: 45,
    title: '2to1',
    value: 0,
    gain: 3,
    gridCol: '14',
    gridRow: '2',
    back: 'green',
    condition: (val) => (val + 1) % 3 === 0
  },
  {
    id: 46,
    title: '2to1',
    value: 0,
    gain: 3,
    gridCol: '14',
    gridRow: '3',
    back: 'green',
    condition: (val) => (val + 2) % 3 === 0
  },
])


/*** VARIABLE ***/
const money = ref(10)
const wheel = ref(0)
const earnings = ref([])
const typeOfBetSelected = ref(1)
const playButtonStyle = ref({visibility : ''})
const wheelStyle = ref('')

/*** METHODE ***/
function Increment(ref_bet) {
  if (money.value >= typeOfBetSelected.value) {
    ref_bet.value += typeOfBetSelected.value
    money.value -= typeOfBetSelected.value
  }
}

function Decrement(ref_bet) {
  if (ref_bet.value >= typeOfBetSelected.value) {
    ref_bet.value -= typeOfBetSelected.value
    money.value += typeOfBetSelected.value
  }
}

function Play() {
  wheelStyle.value = 'roulette_img'
  playButtonStyle.value.visibility = 'hidden'
  setTimeout(() =>  {playButtonStyle.value.visibility = ''}, 1800)
  setTimeout(() =>  {
    wheelStyle.value = ''
    //spin the wheel and search for a random number
    let number = Math.floor(Math.random() * (38))-1;
    wheel.value = number
    // calculation of earnings and displays the winning squares during 1s
    let gain = 0;
    bets.value.forEach((mise) => {
      if (mise.condition(number)) {
        let color = mise.back
        mise.back = 'rgba(134,192,119,0.3)'
        setTimeout(() => mise.back = color, 1500)
        gain += mise.value * mise.gain;
        money.value += mise.value * mise.gain;
      }
      gain -= mise.value
      setTimeout(() => mise.value = 0, 1500)
    })
    // add earnings to history
    earnings.value.unshift(gain)
    /*if (gain > 0)
      confetti.addConfetti()*/
  }, 500)
}

/*** INITIALISATION ***/
onMounted(() => {
  // initializes boxes from 1 to 36 automatically
  for (let row = 1; row <= 3; row++) {
    for (let col = 4 - row; col <= 36; col += 3) {
      bets.value.push({
        id: col,
        title: col.toString(),
        value: 0,
        gain: 36,
        gridCol: (col + 3) / 3,
        gridRow: row,
        back: red_number.includes(col) ? 'red' : 'black',
        condition: (val) => val === col
      })
    }
  }
})




 function   submitToken() {
      console.log(token.value);
      let socket = SocketioService.setupSocketConnection(token.value);
      console.log(socket)
      SocketioService.subscribeToMessages((err, data) => {
        console.log(data);
        this.messages.push(data);
      });
    }
    /*
function  submitMessage() {
      const CHAT_ROOM = "myRandomChatRoomId";
      const message = this.inputMessageText;
      SocketioService.sendMessage({message, roomName: CHAT_ROOM}, cb => {
        // callback is acknowledgement from server
        console.log(cb);
        this.messages.push({
          message,
          ...SENDER
        });
        // clear the input after the message is sent
        this.inputMessageText = '';
      });
    }
*/
onBeforeUnmount( () =>  {
    SocketioService.disconnect();
  })

</script>

<style>
.App {
  padding: 1rem;
}

.box {
  width: fit-content;
  height: 400px;
  border: solid 1px #000;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.messages {
  flex-grow: 1;
}

.input-div {
  display: flex;
  width: 100%;
}


.app {
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
  margin: 100px 10px 10px;
  flex: 3;
  height: 50vh;
}

.block_somme {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: end;
}

.block_somme_item {
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
  grid-template-columns: repeat(14, 1fr);
  justify-items: stretch;
  align-items: stretch;
  justify-content: stretch;
  align-content: center;
  color: white;
  background-color: green;
  height: 80px;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
}

.block_mise_1_item {
  min-height: 40px;
  border: white 1px solid;
  display: flex;

  align-items: center;
  justify-content: center;
}

.block_mise_1_item:hover, .block_somme_item:hover {
  background-color: #2df317;
}

.block_mise_1_item_val {
  background-color: cadetblue;
  width: 25px;
  height: 25px;
  border-radius: 10px;
  border: black 2px dashed;
  font-size: 15px;
  position: absolute;

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
.roulette_img
{
  background-image: url("assets/roulette.png");
  background-size: cover;
  animation:spin 0.5s linear infinite;
  color: transparent;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }


.play {
  border: black 1px solid;
  height: 35px;
  width: 80%;
  border-radius: 5px;
  font-size: large;
  margin-top: 20px;
}
</style>
