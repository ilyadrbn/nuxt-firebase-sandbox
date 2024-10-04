export const useRegValidation = (
    focusField: IField,
    registerForm: IRegisterForm,
) => {
    return [
        (value: string) => {
            if (focusField.required && !value) {
                return "This field is required.";
            }
            return true;
        },
        (value: string) => {
            if (
                focusField.min &&
                focusField.max &&
                (value.length < focusField.min || value.length > focusField.max)
            ) {
                return `The length must be between ${focusField.min} and ${focusField.max}.`;
            }
            return true;
        },
        (value: string) => {
            if (
                focusField.isConfirmed &&
                value !== registerForm.password.value
            ) {
                return "The password does not match.";
            }
            return true;
        },
        (value: string) => {
            if (
                focusField.requiredValidation &&
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ) {
                return "Invalid email address.";
            }
            return true;
        },
    ];
};
