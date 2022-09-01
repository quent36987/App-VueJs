import { IMessage } from "@/store/state";
import { navigate } from "@/router/utils";
import { EMutation, store } from "@/store/index";
import { io, Socket } from "socket.io-client";

// eslint-disable-next-line @typescript-eslint/init-declarations,init-declarations
export let socket: Socket;

export function init(token: string): void {
    console.log("init");
    socket = io("http://localhost:3000", {
        auth: {
            token,
        },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    socket.onAny((event, ...args: any[]): void => {
        console.log("[onEvent]", event, ...args);
    });

    socket.on("set_money", (money: number): void => {
        console.log(money);
    });
    socket.on("message", (objet: IMessage): void => {
        store.commit(EMutation.AddMessage, objet);
    });
    socket.on("set_info_player", (info): void => {
        console.log(info);
    });

    socket.on("connect", (): void => {
        console.log("connected !");
        store.state.user = token;
        navigate("/jeux");
    });
}

export function sendMessage(message: string): void {
    if (message !== "") {
        socket.emit("message", { message });
    }
}
