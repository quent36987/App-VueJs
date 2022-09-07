/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention, @typescript-eslint/explicit-module-boundary-types */
const VRoundsHistory = async () =>
    import("@/components/history/v-rounds-history.vue");
const VRound = async () => import("@/components/history/v-round.vue");
/* eslint-enable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention */

export { VRoundsHistory, VRound };
