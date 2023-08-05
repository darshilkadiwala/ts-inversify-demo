// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { injectable } from "inversify";

@injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class UserRepository {
  constructor() {
    console.log("UserRepository");
  }
  public getUsers() {
    return [];
  }
}
