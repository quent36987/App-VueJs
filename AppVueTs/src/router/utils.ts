import { router } from "@/router/index";

export function navigate(path: string): void {
    router
        .push({ append: true, path })
        .catch((error): void => console.log(error));
}
