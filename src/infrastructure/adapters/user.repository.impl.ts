import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/domain/interfaces/user.repository";
import { User } from "src/domain/models/user";

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return Promise.resolve(user);
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find(user => user.id === id);
    if (user) return Promise.resolve(user);
    return Promise.reject(new Error("User not found"));
  }

  async findAll(pag : number , limit : number): Promise<User[]> {
    if ( pag  && limit) {
        const start = ( pag - 1 ) * limit;
        const end = start + limit;
        return Promise.resolve (this.users.slice(start, end));
    }
    return  Promise.resolve(this.users);
  }

  async update(id: string, user: User): Promise<User> {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return Promise.reject(new Error("User not found"));
    this.users[index] = { ...this.users[index], ...user };
    return Promise.resolve(this.users[index]);
  }

  async delete(id: string): Promise<void> {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return Promise.reject(new Error("User not found"));
    this.users.splice(index, 1);
    return Promise.resolve();
  }

}