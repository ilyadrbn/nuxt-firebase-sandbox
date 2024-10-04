<script setup lang="ts">
const registerForm = reactive<IRegisterForm>({
    firstName: {
        value: "",
        required: true,
        min: 3,
        max: 15,
        label: "First Name",
    },
    lastName: {
        value: "",
        required: false,
        label: "Last Name",
    },
    email: {
        value: "",
        required: true,
        min: 3,
        max: 50,
        requiredValidation: true,
        label: "Email",
    },
    password: {
        value: "",
        required: true,
        min: 3,
        max: 15,
        label: "Password",
        type: "password",
    },
    confirmPassword: {
        value: "",
        required: true,
        isConfirmed: true,
        label: "Confirm Password",
        type: "password",
    },
});

const tos = ref<boolean>(false);

const isFieldFilled = computed(() => {
    return Object.values(registerForm).every((field) =>
        field.required ? field.value : true,
    );
});
</script>

<template>
    <v-form @submit.prevent>
        <v-text-field
            v-for="field in Object.keys(registerForm)"
            :key="field"
            v-model="registerForm[field].value"
            :label="registerForm[field].label"
            :rules="useRegValidation(registerForm[field], registerForm)"
            validate-on="blur"
            :type="registerForm[field].type"
            :autocomplete="registerForm[field].type == 'password' ? 'on' : ''"
        ></v-text-field>

        <v-checkbox v-model="tos">
            <template #label>
                <p>I agree to the &#8291;</p>
                <v-tooltip location="bottom">
                    <template #activator="{ props }">
                        <NuxtLink
                            to="#"
                            class="text-decoration-underline"
                            target="_blank"
                            v-bind="props"
                            @click.stop
                        >
                            terms and conditions
                        </NuxtLink>
                    </template>
                    Opens in new window
                </v-tooltip>
            </template>
        </v-checkbox>
        <v-btn
            class="mt-2"
            type="submit"
            block
            :disabled="!isFieldFilled || !tos"
            >Submit</v-btn
        >
    </v-form>
</template>
