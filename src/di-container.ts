import { UserController } from "@controllers/user.controller";
import { UserRepository } from "@repositories/user.repository";
import { UserService } from "@services/user.service";
import { Container } from "inversify";

export class DiContainer {
  private _container: Container;

  public get container(): Container {
    return this._container;
  }

  constructor() {
    this._container = new Container();
    this.configureBindings();
  }

  private configureBindings(): void {
    this._container.bind<UserService>(UserService).to(UserService).inSingletonScope();
    this._container.bind<UserRepository>(UserRepository).to(UserRepository).inSingletonScope();
    this._container.bind<UserController>(UserController).to(UserController).inSingletonScope();
  }

  get<T>(identifier: symbol): T {
    return this._container.get<T>(identifier);
  }
}
