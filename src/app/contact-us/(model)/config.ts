import { FieldsAndErrorMap } from "./types";

export const FieldErrorsMap: FieldsAndErrorMap = {
    email: {
        required: 'This field is required',
        pattern: 'Please enter a valid email',
    },
    firstName: {
        required: 'This field is required',
        minLength: 'Your name should contain at least 2 characters'
    },
    lastName: {
        required: 'This field is required',
        minLength: 'Your lastname must contain at least 2 characters'
    },
    comment: {
        maxLength: 'Your comment must not be longer than 900 characters'
    },
    phone: {
        required: 'This field is required',
        pattern: 'Please enter a valid phone number'
    }
}