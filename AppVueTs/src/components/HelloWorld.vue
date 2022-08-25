<template>
  <div class="app">
    <div class="header">
      <span>{{ this.money() }} 💲</span>
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
      <div class="block_roulette">
        <div
          class="roulette"
          :style="{
            backgroundColor: red_number.includes(wheel) ? 'red' : 'black',
          }"
        >
          <div :class="wheelStyle">
            <span>{{ wheel }}</span>
          </div>
        </div>
        <button class="play" :style="playButtonStyle" @click="Play">
          Play
        </button>
      </div>
      <div class="block_mise">
        <div class="block_mise_1">
          <Case
            v-for="mise in bets"
            :key="mise.id"
            class="block_mise_1_item"
            :style="{
              gridColumn: mise.gridCol ? mise.gridCol : '',
              gridRow: mise.gridRow ? mise.gridRow : '',
            }"
            :title="mise.title"
            :background-color="mise.back"
            :ernings="mise.gain"
            :id="mise.id"
          >
          </Case>
        </div>
      </div>
      <div class="block_somme">
        <div
          class="block_somme_item"
          v-for="item in typeOfBet"
          :key="item"
          :style="{
            backgroundColor: item === typeOfBetSelected ? '#2df317' : '',
          }"
          @click="typeOfBetSelected = item"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import Case from "@/components/Case.vue";
import Bet from "@/class/bet";
@Component({
  components: { Case },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  /*** PARAM ***/
  public red_number = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  public typeOfBet = [1, 5, 25, 100];

  public bets = [new Bet("coucou")];
  /*** VARIABLE ***/
  /*public bets = [
    {
      id: 0,
      title: "0",
      gain: 36,
      gridCol: "1",
      gridRow: "1/4",
      back: "green",
      condition: (val: number) => val > 0 && val < 13,
    },
    {
      id: 48,
      title: "1st 12",
      gain: 3,
      gridCol: "2 / 6",
      back: "green",
      condition: (val: number) => val > 0 && val < 13,
    },
    {
      id: 49,
      title: "2nd 12",
      gain: 3,
      gridCol: "6/10",
      back: "green",
      condition: (val: number) => val > 12 && val < 25,
    },
    {
      id: 37,
      title: "3rd 12",
      gain: 3,
      gridCol: "10/14",
      back: "green",
      condition: (val: number) => val > 24,
    },
    {
      id: 38,
      title: "1 To 18",
      gain: 2,
      gridCol: "2/4",
      back: "green",
      condition: (val: number) => val > 0 && val < 18,
    },
    {
      id: 39,
      title: "EVEN",
      gain: 2,
      gridCol: "4/6",
      back: "green",
      condition: (val: number) => val % 2 === 0,
    },
    {
      id: 40,
      title: "R",
      gain: 2,
      gridCol: "6/8",
      back: "red",
      condition: (val: number) => this.red_number.includes(val),
    },
    {
      id: 41,
      title: "B",
      gain: 2,
      gridCol: "8/10",
      back: "black",
      condition: (val: number) => !this.red_number.includes(val),
    },
    {
      id: 42,
      title: "ODD",
      gain: 2,
      gridCol: "10/12",
      back: "green",
      condition: (val: number) => val % 2 === 1,
    },
    {
      id: 43,
      title: "19 To 36",
      gain: 2,
      gridCol: "12/14",
      back: "green",
      condition: (val: number) => val >= 19,
    },
    {
      id: 44,
      title: "2to1",
      gain: 3,
      gridCol: "14",
      gridRow: "1",
      back: "green",
      condition: (val: number) => val % 3 === 0,
    },
    {
      id: 45,
      title: "2to1",
      gain: 3,
      gridCol: "14",
      gridRow: "2",
      back: "green",
      condition: (val: number) => (val + 1) % 3 === 0,
    },
    {
      id: 46,
      title: "2to1",
      gain: 3,
      gridCol: "14",
      gridRow: "3",
      back: "green",
      condition: (val: number) => (val + 2) % 3 === 0,
    },
  ];*/

  @Getter("getMoney") public money!: () => number;
  public wheel = 0;
  public earnings = [];
  public typeOfBetSelected = 1;
  public playButtonStyle = { visibility: "" };
  public wheelStyle = "";

  /*** INITIALISATION ***/
  mounted() {
    // initializes boxes from 1 to 36 automatically
    for (let row = 1; row <= 3; row++) {
      for (let col = 4 - row; col <= 36; col += 3) {
        this.bets.push({
          id: col,
          title: col.toString(),
          gain: 36,
          gridCol: ((col + 3) / 3).toString(),
          gridRow: row.toString(),
          back: this.red_number.includes(col) ? "red" : "black",
          condition: (val) => val === col,
        });
      }
    }

    //let cases =  new Case()
  }

  /*** METHODE ***/
  Play() {
    console.log("oui");
    let number = Math.floor(Math.random() * 38) - 1;
    this.wheel = number;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.block_mise_1_item:hover,
.block_somme_item:hover {
  background-color: #2df317;
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

.roulette_img {
  /*background-image: url("assets/roulette.png");*/
  background-size: cover;
  animation: spin 0.5s linear infinite;
  color: transparent;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
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
