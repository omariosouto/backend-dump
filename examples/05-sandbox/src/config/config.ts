import { s } from "@protocols/schema";
import dotenv from "dotenv";
import "./money";
dotenv.config();

const EnvironmentSchema = s.object({
  PORT: s.string().transform((arg) => Number(arg)),
}).strict();

export const env = EnvironmentSchema.parse({
  PORT: process.env.PORT
});
