import { RouteHandler } from "@protocols/server";
import * as controllerDemo from "@src/controllers/demo";
import * as adapterDemo from "@src/adapters/demo";

export const routes: RouteHandler[] = [
  {
    path: "/",
    method: "GET",
    async handler() {
      return {
        body: adapterDemo.modelDemoHelloWorldToWire(controllerDemo.helloWorld()),
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