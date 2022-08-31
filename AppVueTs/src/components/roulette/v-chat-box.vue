<template>
    <div class="chat-box">
        <span>Message :</span>
        <div v-for="message of messages" :key="message">
            {{ message }}
        </div>
        <div>
            <input v-model="message" placeholder="edit me" />
            <button v-show="message !== ''" @click="addMessage">Send</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class VWheel extends Vue {
        public message = "";
        public messages: string[] = [];

        public addMessage(): void {
            this.messages.push(this.message);
            this.message = "";
        }
    }
</script>

<style scoped>
    .chat-box {
        height: 15vh;
    }
</style>
