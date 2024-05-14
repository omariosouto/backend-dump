import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export interface HandlerOutput {
  status: number;
  body: unknown;
}
export interface RouteHandler {
  path: string;
  method: "GET" | "POST" | "OPTIONS" | "DELETE" | "PUT" | "PATCH";
  handler: (
    context: {
      body: any,
      query: any,
      dbPrisma: () => PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
    }
  ) => HandlerOutput | Promise<HandlerOutput>;
}