/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention, @typescript-eslint/explicit-module-boundary-types */
const VBoard = async () => import("@/components/v-board.vue");
const VCase = async () => import("@/components/v-case.vue");
const VGain = async () => import("@/components/v-gain.vue");
const VGainHistory = async () => import("@/components/v-gains-history.vue");
const VWheel = async () => import("@/components/v-wheel.vue");
const VToken = async () => import("@/components/v-token.vue");
const VTokenList = async () => import("@/components/v-token-list.vue");
const VHeader = async () => import("@/components/v-header.vue");
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
