import { router } from "@/router/index";

function navigate(path: string): void {
    router
        .push({ append: true, path })
        .catch((error): void => console.log(error));
}

export { navigate };
