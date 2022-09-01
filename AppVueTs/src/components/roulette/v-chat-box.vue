<template>
    <div class="chat-box">
        <div>
            <input v-model="message" placeholder="edit me" />
            <button @click="addMessage">Send</button>
        </div>
        <span>Message :</span>
        <div v-for="message of messages.slice(0, 6)" :key="message.message">
            {{ `${message.user}: ${message.message}` }}
        </div>
    </div>
</template>

<script lang="ts">
    import { IMessage } from "@/store/state";
    import { sendMessage } from "@/socket-setup";
    import { State } from "vuex-class";
    import { Component, Vue } from "vue-property-decorator";
    import { EMutation, store } from "@/store";

    @Component
    export default class VWheel extends Vue {
        @State protected readonly messages!: IMessage[];
        @State protected readonly user!: string;

        public message = "";

        public addMessage(): void {
            sendMessage(this.message);
            store.commit(EMutation.AddMessage, {
                message: this.message,
                user: this.user,
            });
            this.message = "";
        }
    }
</script>

<style scoped>
    .chat-box {

        border: #1df387 1px solid;
    }
</style>
