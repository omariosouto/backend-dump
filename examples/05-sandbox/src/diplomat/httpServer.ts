import { RouteHandler } from "@protocols/server";
import * as routesDemo from "@src/diplomat/routes/demo";

export const routes: RouteHandler[] = [
  ...routesDemo.routes,
];