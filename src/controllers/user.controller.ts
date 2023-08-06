import { UserService } from "@services/user.service";

import { Request, Response } from "express";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject } from "inversify";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { controller, httpGet, httpPost } from "inversify-express-utils";

@controller("/users")
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class UserController {
  constructor(@inject(UserService) private readonly _userService: UserService) {}

  @httpGet("/")
  async index(req: Request, res: Response) {
    const users = this._userService.getUsers();
    const userCount = this._userService.getUserCount();

    res.status(200).json({ users, userCount });
  }

  @httpPost("/")
  async addUser(req: Request, res: Response) {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }

    const user = this._userService.addUser(username);
    if (!user) {
      return res.status(400).json({ message: "Can't add user" });
    }

    return res.status(201).json({ message: "User added successfully" });
  }
}
