/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention, @typescript-eslint/explicit-module-boundary-types */
const VBoard = async () => import("@/components/roulette/v-board.vue");
const VCell = async () => import("@/components/roulette/v-cell.vue");
const VGain = async () => import("@/components/roulette/v-gain.vue");
const VGainsHistory = async () =>
    import("@/components/roulette/v-gains-history.vue");
const VWheelBox = async () => import("@/components/roulette/v-wheel-box.vue");
const VToken = async () => import("@/components/roulette/v-token.vue");
const VTokenList = async () => import("@/components/roulette/v-token-list.vue");
const VHeader = async () => import("@/components/roulette/v-header.vue");
const VChatBox = async () => import("@/components/roulette/v-chat-box.vue");
/* eslint-enable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention */

export {
    VBoard,
    VCell,
    VChatBox,
    VGain,
    VGainsHistory,
    VHeader,
    VToken,
    VTokenList,
    VWheelBox,
};
