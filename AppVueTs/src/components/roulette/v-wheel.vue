<template>
    <div class="block_roulette">
        <div
            class="roulette"
            :style="{
                '--bg-color': `var(--${wheelColor})`,
            }"
        >
            {{ value }}
        </div>
        <button
            class="play"
            :style="{
                '--hidden': playButtonHidden ? '' : 'hidden',
            }"
            @click="$emit('click')"
        >
            Play
        </button>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class VWheel extends Vue {
        @Prop() protected readonly playButtonHidden!: boolean;
        @Prop() protected readonly value!: number;
        @Prop() protected readonly wheelColor!: string;
    }
</script>

<style scoped>
    .block_roulette {
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 10px;
        flex: 1;
        height: 50vh;
        align-items: center;
    }

    .roulette {
        --bg-color: pink;
        background-color: var(--bg-color);

        display: inline-block;
        color: white;
        width: 200px;
        height: 200px;

        border-radius: 50%;
        text-align: center;
        line-height: 3em;
        font-size: 4em;
    }
    .play {
        --hidden: none;
        visibility: var(--hidden);
        border: black 1px solid;
        height: 35px;
        width: 80%;
        border-radius: 5px;
        font-size: large;
        margin-top: 20px;
    }
</style>
