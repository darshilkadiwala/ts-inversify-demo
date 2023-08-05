// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { controller, httpGet } from "inversify-express-utils";
import { UserService } from "./user.service";

@controller("/users")
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class UserController {
  constructor(private readonly _userService: UserService) {
    console.log("UserController");
  }

  @httpGet("/")
  async index() {
    const users = await this._userService.getUsers();
    return `current users : ${users.length}`;
  }
}
