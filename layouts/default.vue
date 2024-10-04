<script setup lang="ts">
const drawer = ref(false);
const items = ref([
    {
        name: "Item #1",
        id: 1,
    },
    {
        name: "Item #2",
        id: 2,
    },
    {
        name: "Item #3",
        id: 3,
    },
]);
</script>

<template>
    <v-layout class="rounded">
        <v-app-bar :elevation="2">
            <template #prepend>
                <v-app-bar-nav-icon
                    @click.stop="drawer = !drawer"
                ></v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>Application Bar</v-app-bar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary>
            <v-list-item
                title="My Application"
                subtitle="Vuetify"
            ></v-list-item>
            <v-divider></v-divider>
            <v-list-item
                v-for="item in items"
                :key="item.id"
                title="List Item 1"
                link
            ></v-list-item>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center">
            <slot />
        </v-main>
    </v-layout>
</template>
