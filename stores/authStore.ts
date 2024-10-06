import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
    const isAuth = ref<boolean>(false);

    async function register() {
        if (isAuth) {
            return;
        }
        
    }

    return { isAuth, register };
});
