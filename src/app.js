import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Notice how this function is asynchronous! This is the ideal place
// to initialize your database or any other services your app might need.
export default async function app() {
  const expressApp = express();
  expressApp.use(cors()); // Enables CORS headers
  expressApp.use(bodyParser.json());

  expressApp.get("/hello", (req, res) => {
    res.send("Hello world!");
  });

  return expressApp;
}
