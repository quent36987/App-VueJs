<template>
    <div
        class="case"
        :class="{ highlight: highlight }"
        @click="$emit('click')"
        @contextmenu.prevent
        @click.right="$emit('click_right')"
        :style="{
            '--bg-color': `var(--${backgroundColor})`,
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
        @Prop() protected readonly backgroundColor!: string;
        @Prop() protected readonly highlight!: boolean;
        @Prop() protected readonly title!: string;
        @Prop() protected readonly value!: number;
    }
</script>

<style scoped>
    .case {
        --bg-color: pink;
        background-color: var(--bg-color);
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

    .case.highlight {
        animation-name: blink;
        animation-duration: 5s;
    }

    @keyframes blink {
        0% {
            background-color: var(--bg-color);
        }
        40% {
            background-color: var(--case-highlight);
        }
        100% {
            background-color: var(--bg-color);
        }
    }
</style>