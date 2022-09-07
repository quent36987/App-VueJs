<template>
    <div class="v-chat-box">
        <div>
            <input v-model="message" placeholder="edit me" />
            <button @click="addMessage">Send</button>
        </div>

        <span>Messages :</span>
        <div
            v-for="message of messages.slice(0, displayedMessageCount)"
            :key="message.message"
        >
            {{ message.user }}: {{ message.message }}
        </div>
    </div>
</template>

<script lang="ts">
    import { DISPLAYED_MESSAGE_COUNT } from "@/configs/constants";
    import { IMessage } from "@/store/state";
    import { sendMessage } from "@/socket-setup";
    import { State } from "vuex-class";
    import { Component, Vue } from "vue-property-decorator";
    import { EMutation, store } from "@/store";

    @Component
    export default class extends Vue {
        @State protected readonly messages!: IMessage[];
        @State protected readonly user!: string;

        protected displayedMessageCount = DISPLAYED_MESSAGE_COUNT;
        protected message = "";

        protected addMessage(): void {
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
    .v-chat-box {
        border: #1df387 1px solid;
    }
</style>
