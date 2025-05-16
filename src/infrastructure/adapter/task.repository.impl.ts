import { Injectable } from "@nestjs/common";
import { TaskRepository } from "src/dominio/interface/task.repository";
import { Task } from "src/dominio/models/task";

@Injectable()
export class TaskRepositoryImpl implements TaskRepository {

    private readonly tasks: Task [] = [];

    async create(task: Task): Promise<Task> {
        this.tasks.push(task);
        return Promise.resolve(task);
    }
    async findAll(pag ?: number , withPag ?: number): Promise<Task[]> {
        if (pag && withPag) {
            const start = (pag - 1) * withPag;
            const end = start + withPag;
            return Promise.resolve(this.tasks.slice(start, end));
        }
        return Promise.resolve(this.tasks);
    }
    async findById(id: string): Promise<Task> {
        const task = this.tasks.find(task => task.id === id);
        if (!task) throw new Error(`Task with id ${id} not found`);
        return Promise.resolve(task);
    }
    async update(id : string , taskUpdate: Task): Promise<Task> {
        
        const task = this.tasks.findIndex(task => task.id === id);
        if (!task) throw new Error(`Task with id ${id} not found`);
        this.tasks[task].title = taskUpdate.title;
        this.tasks[task].description = taskUpdate.description;
        this.tasks[task].completed = taskUpdate.completed;
        this.tasks[task].createdAt = taskUpdate.createdAt;
        return Promise.resolve(this.tasks[task]);
  
    }
    async delete(id: string): Promise<void> {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) throw new Error(`Documento with id ${id} not found`);
    
        this.tasks.splice(index, 1 );
    }

}