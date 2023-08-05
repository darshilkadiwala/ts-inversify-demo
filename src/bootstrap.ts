import "dotenv/config";
import "reflect-metadata";

import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";
import "./user.controller";

/*
  REMEMBER: Controller -> Service -> Repository
  make sure to export the instance of the container here.
*/

export async function Bootstrap() {
  const container = new Container();
  container.bind(UserRepository).toSelf();
  container.bind(UserService).toSelf();

  const server = new InversifyExpressServer(container);

  const app = server.build();

  app.listen(5000, () => {
    console.log("server connected on http://localhost:5000/");
  });
}

Bootstrap();
