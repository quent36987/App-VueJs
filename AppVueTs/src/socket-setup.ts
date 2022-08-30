import { io, Socket } from "socket.io-client";

// eslint-disable-next-line @typescript-eslint/init-declarations,init-declarations
export let socket: Socket;

export function getBaseUrl(): string {
    return location.origin.replace(/:\d+/, ":8081");
}

export function init(): void {
    socket = io("http://localhost:3000");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    socket.onAny((event, ...args: any[]): void => {
        console.log("[onEvent]", event, ...args);
    });

    socket.on("set_money", (money: number): void => {
        console.log(money);
    });

    socket.on("set_info_player", (info): void => {
        console.log(info);
    });

    socket.on("connect", (): void => {
        console.log("connected !");
    });

}
