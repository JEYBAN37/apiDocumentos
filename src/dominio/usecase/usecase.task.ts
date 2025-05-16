import { TaskDto } from "src/infrastructure/adapter/dto/task.dto";
import { TaskRepository } from "../interface/task.repository";
import { Task } from "../models/task";
import { TaskMapper } from "src/infrastructure/adapter/mapper/task.mapper";

export class UseCaseTask {
    constructor(
        private readonly taskRepository: TaskRepository) {}

    async create(taskdto: TaskDto): Promise<Task> {
        const createId : number = Math.floor(Math.random() * 1000);
        const task : Task = TaskMapper.toDomain(taskdto, createId.toString(), new Date());
        return this.taskRepository.create(task);
    }

    async findAll(pag : number , withPag : number): Promise<Task[]> {
        return this.taskRepository.findAll(pag, withPag);
    }

    async findById(id: string): Promise<Task> {
        return this.taskRepository.findById(id);
    }

    async update(id:string , taskDto: TaskDto): Promise<Task> {
        const taskUpdate : Task = TaskMapper.toDomain(taskDto, id, new Date());
        return this.taskRepository.update(id,taskUpdate);
    }

    async delete(id: string): Promise<void> {
        return this.taskRepository.delete(id);
    }

    async complete(id: string): Promise<Task> {
        const task = await this.taskRepository.findById(id);
        task.completed = true;
        return this.taskRepository.update(id, task);
    }

}