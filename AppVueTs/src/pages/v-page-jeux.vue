<template>
    <div class="pages-jeux">
        <nav>
            <router-link to="/jeux">Roulette</router-link> |
            <router-link to="/history">Historique</router-link>
        </nav>

        <router-view />
    </div>
</template>
<script lang="ts">
    import { navigate } from "@/router/utils";
    import { State } from "vuex-class";
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class VPageJeux extends Vue {
        @State protected readonly user!: string;

        public mounted(): void {
            if (this.user === "") {
                console.log(this.user);
                navigate("/");
            }
        }
    }
</script>

<style scoped>
    .pages-jeux {
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
