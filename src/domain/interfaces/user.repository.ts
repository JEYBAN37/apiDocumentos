import { User } from "../models/user";

export interface UserRepository {
    findAll(pag ?: number , limit ?: number): Promise<User[]>;
    findById(id: string): Promise<User>;
    create(user: User): Promise<User>;
    update(id: string, user: User): Promise<User>;
    delete(id: string): Promise<void>;
}  