/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention, @typescript-eslint/explicit-module-boundary-types */
const VPageRoulette = async () => import("@/pages/v-page-roulette.vue");
const VPageHistory = async () => import("@/pages/v-page-history.vue");
const VPageHome = async () => import("@/pages/v-page-home.vue");
const VPageGame = async () => import("@/pages/v-page-game.vue");
/* eslint-enable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention */

export { VPageRoulette, VPageHistory, VPageHome, VPageGame };
