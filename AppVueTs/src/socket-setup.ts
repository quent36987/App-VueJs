import { IMessage } from "@/store/state";
import { navigate } from "@/router/utils";
import { EMutation, store } from "@/store/index";
import { io, Socket } from "socket.io-client";

// eslint-disable-next-line @typescript-eslint/init-declarations,init-declarations
export let socket: Socket;

interface IInfo {
    players: { money: number; user: string }[];
    wheel: number;
}

function searchMyInfo(
    info: IInfo
): { money: number; user: string } | undefined {
    return info.players.find((elt): boolean => elt.user === store.state.user);
}

// eslint-disable-next-line max-lines-per-function
export function init(token: string): void {
    store.state.user = token;
    navigate("/play");
    return;

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

    socket.on("go", (money: number): void => {
        console.log(money);
    });
    socket.on("message", (objet: IMessage): void => {
        store.commit(EMutation.AddMessage, objet);
    });
    socket.on("result", (info: IInfo): void => {
        store.commit(EMutation.SetWheelNumber, info.wheel);
        const myInfo = searchMyInfo(info);
        if (myInfo) {
            store.commit(EMutation.SetMoney, myInfo.money);
        }
    });

    socket.on("connect", (): void => {
        console.log("connected !");
        store.state.user = token;
        navigate("/play");
    });
}

export function sendMessage(message: string): void {
    if (message !== "") {
        socket.emit("message", { message });
    }
}
