<script setup lang="ts">
const loginForm = reactive<ILoginForm>({
    email: {
        value: "",
        required: true,
        label: "Email",
    },
    password: {
        value: "",
        required: true,
        label: "Password",
        type: "password",
    },
});

const isFieldFilled = computed(() => {
    return Object.values(loginForm).every((field) => field.value);
});
console.log(isFieldFilled.value);
</script>

<template>
    <v-form @submit.prevent>
        <v-text-field
            v-for="field in Object.keys(loginForm)"
            :key="field"
            v-model="loginForm[field].value"
            :label="loginForm[field].label"
            :rules="useLoginValidation(loginForm[field])"
            validate-on="blur"
            :type="loginForm[field].type"
            :autocomplete="loginForm[field].type == 'password' ? 'on' : ''"
        ></v-text-field>

        <v-btn class="mt-2" type="submit" block :disabled="!isFieldFilled"
            >Submit</v-btn
        >
    </v-form>
</template>

<style scoped></style>
