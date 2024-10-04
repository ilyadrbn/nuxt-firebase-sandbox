<script setup lang="ts">
const dialog = ref<boolean>(false);
const tab = ref<"register" | "login">("register");
</script>

<template>
    <div class="pa-4 text-center">
        <v-dialog v-model="dialog" class="dialog-popup">
            <!-- ? Auth Button -->
            <template #activator="{ props: activatorProps }">
                <v-btn
                    class="text-none font-weight-regular w-full"
                    prepend-icon="mdi-account"
                    text="Authorize"
                    variant="tonal"
                    v-bind="activatorProps"
                ></v-btn>
            </template>
            <!-- ? ------------- -->

            <v-card
                width="600"
                class="mx-auto"
                prepend-icon="mdi-account"
                title="User Profile"
            >
                <v-card-text>
                    <v-tabs v-model="tab" bg-color="transparent" class="mb-6">
                        <v-tab value="register">Register</v-tab>
                        <v-tab value="login">Login</v-tab>
                    </v-tabs>

                    <v-tabs-window v-model="tab">
                        <v-tabs-window-item value="register">
                            <AuthRegisterForm />
                        </v-tabs-window-item>
                        <v-tabs-window-item value="login">
                            <AuthLoginForm />
                        </v-tabs-window-item>
                    </v-tabs-window>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        text="Close"
                        variant="plain"
                        @click="dialog = false"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style lang="css" scoped>
.dialog-popup ::v-deep .v-overlay__content {
    width: initial;
}
</style>
