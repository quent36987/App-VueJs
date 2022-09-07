<template>
    <div class="v-page-game">
        <nav>
            <router-link to="/play">Wheel Game</router-link> |
            <router-link to="/history">Round History</router-link>
        </nav>

        <router-view />
    </div>
</template>

<script lang="ts">
    import { navigate } from "@/router/utils";
    import { State } from "vuex-class";
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class extends Vue {
        @State protected readonly user!: string;

        protected mounted(): void {
            if (this.user === "") {
                navigate("/");
            }
        }
    }
</script>

<style scoped>
    .v-page-game {
        max-width: 1400px;
        min-width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }

    nav {
        padding: 30px;
    }

    nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
