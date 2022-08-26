<template>
    <div>
        <BoardGame />
    </div>
</template>

<script lang="ts">
    import BoardGame from "@/components/BoardGame.vue";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: {
            boardGame: BoardGame,
        },
    })
    export default class HomeView extends Vue {}
</script>
