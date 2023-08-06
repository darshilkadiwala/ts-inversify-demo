import "reflect-metadata";

import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";

import "./controllers/user.controller";
import { DiContainer } from "./di-container";

export async function ServerSetup() {
  const diContainer = new DiContainer();

  const expressApp = express();
  expressApp.use(express.json());
  expressApp.use(express.urlencoded({ extended: true }));

  const server = new InversifyExpressServer(diContainer.container, null, null, expressApp);

  const app = server.build();

  app.listen(5000, () => {
    console.log("server connected on http://localhost:5000/");
  });
}

ServerSetup();
