import { IBet, IStoreType } from "@/store/state";

const getters = {
    bets(state: IStoreType): IBet[] {
        return state.bets;
    },

    betsId:
        (state: IStoreType): ((id: number) => number) =>
        (id: number): number => {
            const betFind = state.bets.find((bet): boolean => bet.id === id);

            return betFind ? betFind.value : 0;
        },
    money(state: IStoreType): number {
        return state.money;
    },

    tokenSelected(state: IStoreType): number {
        return state.selectedToken;
    },

    totalBet(state: IStoreType): number {
        let earning = 0;
        for (const bet of state.bets) {
            earning += bet.value;
        }

        return earning;
    },
};

export { getters };
