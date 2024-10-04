type TValidator = (value: string) => boolean | string;

interface IField {
    value: string;
    required: boolean;
    min?: number;
    max?: number;
    requiredValidation?: boolean;
    isConfirmed?: boolean;
    label?: string;
    type?: string;
}

interface IRegisterForm {
    [key: string]: IField;
}
