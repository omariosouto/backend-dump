import { RouteHandler } from "@protocols/server";
import * as controllerDemo from "@src/controllers/demo";

export const routes: RouteHandler[] = [
  {
    path: "/",
    method: "GET",
    async handler() {
      return {
        body: controllerDemo.helloWorld(),
        status: 200,
      }
    }
  },
  {
    path: "/api/mutation",
    method: "POST",
    handler({ body }) {
      return {
        body,
        status: 201,
      };
    }
  }
];