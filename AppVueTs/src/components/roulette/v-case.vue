<template>
    <div
        class="case"
        :class="{ highlight: highlight }"
        :style="style"
        @click="$emit('on-click')"
        @contextmenu.prevent
        @click.right="$emit('on-click-right')"
    >
        {{ caseModel.title }}

        <div v-if="caseModel.value > 0" class="block-mise">
            {{ caseModel.value }}
        </div>
    </div>
</template>

<script lang="ts">
    import { Case as CaseModel } from "@/models/case";
    import { IDict } from "@/utils/interfaces";
    import { PropType } from "vue";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class Case extends Vue {
        @Prop({ required: true, type: Object as PropType<CaseModel> })
        protected readonly caseModel!: CaseModel;

        @Prop({ required: true, type: Boolean })
        protected readonly highlight!: boolean;

        protected get style(): IDict<string> {
            return {
                "--bg-color": `var(--${this.caseModel.backgroundColor})`,
            };
        }
    }
</script>

<style scoped>
    .case {
        --bg-color: pink;
        background-color: var(--bg-color);
    }

    .block-mise {
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
