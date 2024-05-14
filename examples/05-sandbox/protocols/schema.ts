import { ZodError } from "zod";

export { z as s } from "zod";

export const isSchemaError = (e: unknown) => e instanceof ZodError;