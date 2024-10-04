export const useLoginValidation = (focusField: IField) => {
    return [
        (value: string) => {
            if (focusField.required && !value) {
                return "This field is required.";
            }
            return true;
        },
    ];
};
