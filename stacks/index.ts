import { MyStack } from "./MyStack";
import { App } from "@serverless-stack/resources";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
    tracing: "disabled",
    // layers: ['arn:aws:lambda:us-east-1:292796236945:layer:go-example-telemetry-api-extension-layer:1']
  });
  app.stack(MyStack);
}
