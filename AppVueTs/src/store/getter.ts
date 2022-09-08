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
        let mise = 0;
        for (const elt of state.bets) {
            mise += elt.value;
        }

        return mise;
    },
};

export { getters };
