/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention, @typescript-eslint/explicit-module-boundary-types */
const VGameWheel = async () => import("@/pages/v-game-wheel.vue");
const VGameHistory = async () => import("@/pages/v-game-history.vue");
const VHome = async () => import("@/pages/v-home.vue");
const VGame = async () => import("@/pages/v-game.vue");
/* eslint-enable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention */

export { VGameWheel, VGameHistory, VHome, VGame };
