/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention, @typescript-eslint/explicit-module-boundary-types */
const VBoard = async () => import("@/components/roulette/v-board.vue");
const VCase = async () => import("@/components/roulette/v-case.vue");
const VGain = async () => import("@/components/roulette/v-gain.vue");
const VGainHistory = async () => import("@/components/roulette/v-gains-history.vue");
const VWheel = async () => import("@/components/roulette/v-wheel.vue");
const VToken = async () => import("@/components/roulette/v-token.vue");
const VTokenList = async () => import("@/components/roulette/v-token-list.vue");
const VHeader = async () => import("@/components/roulette/v-header.vue");
/* eslint-enable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention */

export {
    VBoard,
    VCase,
    VGain,
    VGainHistory,
    VHeader,
    VWheel,
    VToken,
    VTokenList,
};
