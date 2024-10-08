import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: [
        "@nuxt/eslint",
        (_options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => {
                if (config.plugins)
                    config.plugins.push(vuetify({ autoImport: true }));
            });
        },
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
