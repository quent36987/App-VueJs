<template>
    <div class="list" :style="style">
        <transition-group name="lists" tag="slot">
            <div v-for="item of items" :key="item.id">
                <slot name="item" :item="item"></slot>
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts">
    import { IDict } from "@/utils/interfaces";
    import { VToken } from "@/components/roulette";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({ components: { "v-token": VToken } })
    export default class VList extends Vue {
        @Prop() protected readonly alignItem!: string;
        @Prop() protected readonly flexDirection!: string;
        @Prop() protected readonly height!: string;
        @Prop() protected readonly items!: any[];
        @Prop() protected readonly wight!: string;

        protected get style(): IDict<string> {
            return {
                "--align-item": this.alignItem,
                "--flex-direction": this.flexDirection,
                "--height": this.height,
                "--wight": this.wight,
            };
        }
    }
</script>

<style scoped>
    .lists-enter-active,
    .lists-leave-active {
        transition: all 1s;
    }
    .lists-enter, .lists-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }

    .list {
        --flex-direction: row;
        --wight: "";
        --height: "";
        --align-item: center;

        flex-direction: var(--flex-direction);
        width: var(--wight);
        height: var(--height);
        align-items: var(--align-item);

        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        justify-content: left;
    }
</style>
