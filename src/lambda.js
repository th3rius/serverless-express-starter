import app from "./app";
import serverlessExpress from "@codegenie/serverless-express";
import "source-map-support/register"; // Enables support for souce maps!

// We don't need to recreate the entire application if our Lambda
// is already up and running when we receive a new request.
// That's why we cache its instance here.
let serverlessExpressApp;

export async function handler(event, context) {
  if (!serverlessExpressApp) {
    const expressApp = await app();
    serverlessExpressApp = serverlessExpress({app: expressApp});
  }

  return serverlessExpressApp(event, context);
}
