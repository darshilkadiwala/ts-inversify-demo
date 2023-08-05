// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { injectable } from "inversify";
import { UserRepository } from "./user.repository";

@injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {
    console.log("UserService");
  }

  public getUsers() {
    return this._userRepository.getUsers();
  }
}
