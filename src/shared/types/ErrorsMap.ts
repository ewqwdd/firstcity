import { FieldError } from "react-hook-form";

export type ErrorsMap = {[key in FieldError['type']]?: string}
