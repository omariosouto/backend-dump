import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from "@prisma/client/runtime/library";

export const isDbPrismaError = (err: unknown) => {
  if (err instanceof PrismaClientKnownRequestError || err instanceof PrismaClientUnknownRequestError) {
    return true;
  }
};

export const isDbPrismaNotFoundError = (err: unknown) => {
  if(err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
    return true;
  }
}