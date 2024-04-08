import { lazy } from "react";

const ErrorAsync = lazy(async() => await import('./Error'))

export default ErrorAsync