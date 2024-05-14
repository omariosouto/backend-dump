import express, { Response } from "express";
import bodyParser from "body-parser";
import { routes } from "./diplomat/httpServer";
import { PrismaClient } from "@prisma/client";
import { env } from "@config";
import { ZodError } from "zod";
import { isSchemaError } from "@protocols/schema";
import { isDbPrismaError, isDbPrismaNotFoundError } from "@protocols/prisma";

const app = express();

app.use(bodyParser.json());

routes.map(({ path, handler, method }) => {
  app[method.toLowerCase() as unknown as keyof typeof app](path, async (req: any, res: any) => {
    try {
      const output = await handler({
        dbPrisma: () => new PrismaClient(),
        query: req.query,
        body: req.body,
      });

      res.status(output.status).send(output.body);
    } catch (e) {
      handleError(res, e);
    }
  });
});

app.listen(env.PORT, () => {
  console.log(`Server running on http://localhost:${env.PORT}`);
});

function handleError(res: Response, e: unknown) {
  console.error(e);

  if (isDbPrismaError(e)) {
    if (isDbPrismaNotFoundError(e)) {
      res.status(500).send({
        error: {
          message: "Database Error"
        }
      });
      return;
    }
    res.status(500).send({
      error: {
        message: "Database Error"
      }
    });
    return;
  }
  if (isSchemaError(e)) {
    res.status(500).send({
      error: {
        message: "Invalid Schema"
      }
    });
    return;
  }
  res.status(500).send({
    error: {
      message: "Internal Server Error"
    }
  });
}