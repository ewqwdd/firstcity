import { ErrorsMap } from "@/shared/types/ErrorsMap"

export interface ContactForm {
    firstName: string
    lastName: string
    email: string
    phone: string
    comment: string
}

export type FieldsAndErrorMap = {
  [key in keyof ContactForm]?: ErrorsMap;
};