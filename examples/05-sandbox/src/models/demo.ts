import { s } from "@protocols/schema";

export const DemoHelloWorld = s.object({
  message: s.string(),
}).strict();

export type DemoHelloWorld = s.infer<typeof DemoHelloWorld>;