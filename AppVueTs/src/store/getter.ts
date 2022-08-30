import { IBet, IStoreType } from "@/store/state";

export const getters = {
    bets(state: IStoreType): IBet[] {
        return state.bets;
    },
    betsId:
        (state: IStoreType): ((id: number) => number) =>
        (id: number): number => {
            const bet = state.bets.find((elt): boolean => elt.id === id);
            return bet ? bet.val : 0;
        },
    money(state: IStoreType): number {
        return state.money;
    },
    tokenSelected(state: IStoreType): number {
        return state.tokenSelected;
    },
    totalMise(state: IStoreType): number {
        let mise = 0;
        for(const elt of state.bets)
        {
            mise += elt.val;
        }
        return mise;
    },
};
