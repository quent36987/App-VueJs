// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import Vue, { VNode } from "vue";

declare global {
    namespace JSX {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        interface Element extends VNode {}

        // eslint-disable-next-line @typescript-eslint/naming-convention
        interface ElementClass extends Vue {}

        // eslint-disable-next-line @typescript-eslint/naming-convention
        interface IntrinsicElements {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [elem: string]: any;
        }
    }
}
