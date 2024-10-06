import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => {
                if (config.plugins)
                    config.plugins.push(vuetify({ autoImport: true }));
            });
        },
        "@nuxt/eslint",
        "@pinia/nuxt",
        "nuxt-vuefire",
    ],
    build: {
        transpile: ["vuetify"],
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    pinia: {
        storesDirs: ["./stores/**"],
    },
    vuefire: {
        auth: {
            enabled: true,
            sessionCookie: true,
        },
        config: {
            apiKey: process.env.APIKEY,
            authDomain: process.env.AUTHDOMAIN,
            projectId: process.env.PROJECTID,
            storageBucket: process.env.STORAGEBUCKET,
            messagingSenderId: process.env.MESSAGINGSENDERID,
            appId: process.env.APPID,
        },
    },
    typescript: {
        typeCheck: true,
    },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
