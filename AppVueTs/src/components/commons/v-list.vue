<template>
    <div class="v-list" :style="style">
        <transition-group name="transition" tag="slot">
            <div v-for="item of items" :key="item.id">
                <slot name="item" :item="item"></slot>
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts">
    import { PropType } from "vue";
    import { VToken } from "@/components/roulette";
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { IDict, IListItem } from "@/utils/interfaces";

    @Component({ components: { "v-token": VToken } })
    export default class extends Vue {
        @Prop({ default: "", type: String })
        protected readonly alignItem!: string;

        @Prop({ default: false, type: Boolean })
        protected readonly column!: boolean;

        @Prop({ default: "auto", type: String })
        protected readonly height!: string;

        @Prop({ required: true, type: Array as PropType<IListItem[]> })
        protected readonly items!: IListItem[];

        @Prop({ default: "auto", type: String })
        protected readonly wight!: string;

        protected get style(): IDict<string> {
            return {
                "--align-item": this.alignItem,
                "--flex-direction": this.column ? "column" : "row",
                "--height": this.height,
                "--wight": this.wight,
            };
        }
    }
</script>

<style scoped>
    .transition-enter-active,
    .transition-leave-active {
        transition: all 1s;
    }

    .transition-enter,
    .transition-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .v-list {
        --flex-direction: row;
        --wight: auto;
        --height: auto;
        --align-item: center;

        display: flex;
        flex-direction: var(--flex-direction);
        justify-content: left;
        align-items: var(--align-item);
        flex-wrap: nowrap;

        width: var(--wight);
        height: var(--height);
        overflow: hidden;
    }
</style>
