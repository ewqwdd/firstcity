import { lazy } from "react";

const TestimonialsAsync = lazy(async() => await import('./Testimonials'))

export default TestimonialsAsync