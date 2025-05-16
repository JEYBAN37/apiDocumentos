import { Task } from "../models/task";

export interface TaskRepository {
    create(task: Task): Promise<Task>;
    findAll(pag ?: number , withPag ?: number ): Promise<Task[]>;
    findById(id: string): Promise<Task>;
    update(id:string, task: Task): Promise<Task>;
    delete(id: string): Promise<void>;
}