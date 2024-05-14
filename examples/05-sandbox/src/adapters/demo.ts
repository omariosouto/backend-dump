import * as wireOutDemo from "@src/wire/out/demo";
import * as modelsDemo from "@src/models/demo";

export function modelDemoHelloWorldToWire(model: modelsDemo.DemoHelloWorld) {
  return wireOutDemo.DemoHelloWorld.parse(model);
}