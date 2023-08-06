import { UserRepository } from "@repositories/user.repository";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject, injectable } from "inversify";

@injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class UserService {
  constructor(@inject(UserRepository) private readonly _userRepository: UserRepository) {}

  getUsers(): Array<string> {
    return this._userRepository.getUsers();
  }

  addUser(user: string): boolean {
    return this._userRepository.addUser(user);
  }

  getUserCount(): number {
    return this._userRepository.getUserCount();
  }
}
