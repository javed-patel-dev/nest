import { Injectable } from '@nestjs/common';
import { Users } from './db.dto';

@Injectable()
export class AppService {
  public users: Users[] = [];

  Users() {
    return this.users;
  }

  UserById(id: string) {
    return this.users.find((user) => user.id == id);
  }

  CreateUser(user: Users) {
    user.id = Date.now().toString();
    this.users.push(user);
    return this.users;
  }

  UpdateUser(id: string, user: Users) {
    const index = this.users.findIndex((user) => user.id == id);
    user.id = id;
    this.users[index] = user;
    return this.users;
  }

  DeleteUser(id: string) {
    const index = this.users.findIndex((user) => user.id == id);
    this.users.splice(index, 1);
    return this.users;
  }
}
