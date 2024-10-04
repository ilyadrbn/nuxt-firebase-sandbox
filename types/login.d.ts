type TValidator = (value: string) => boolean | string;

interface IField {
    value: string;
    required: boolean;
    label?: string;
    type?: string;
}

interface ILoginForm {
    [key: string]: IField;
}
