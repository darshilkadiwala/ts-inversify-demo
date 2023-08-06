// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { injectable } from "inversify";

@injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class UserRepository {
  private users: Array<string> = ["Alice", "Bob", "Charlie"];

  addUser(user: string): boolean {
    this.users.push(user);
    return true;
  }

  getUsers(): Array<string> {
    return this.users;
  }

  getUserCount(): number {
    return this.users.length;
  }
}
