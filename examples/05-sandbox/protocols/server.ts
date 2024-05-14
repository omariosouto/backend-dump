import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export interface HandlerOutput {
  status: number;
  body: unknown;
}

interface RouteHandlerContext {
  body: any;
  query: any;
  dbPrisma: () => PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
  [key: string]: any;
}
export interface RouteHandler {
  path: string;
  method: "GET" | "POST" | "OPTIONS" | "DELETE" | "PUT" | "PATCH";
  handler: (
    context: RouteHandlerContext
  ) => HandlerOutput | Promise<HandlerOutput>;
}