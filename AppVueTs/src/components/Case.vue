<template>
    <div
        class="case"
        :class="{ highlight }"
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
        @Prop() private readonly backgroundColor!: string;
        @Prop() private readonly highlight!: boolean;
        @Prop() private readonly title!: string;
        @Prop() private readonly value!: number;
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
        /*background-color: yellow !important;*/
        animation-name: blink;
        animation-duration: 4s;
    }

    @keyframes blink {
        0% {
            background-color: var(--bg-color);
        }
        25% {
            background-color: var(--case-highlight);
        }
        100% {
            background-color: var(--bg-color);
        }
    }
</style>
