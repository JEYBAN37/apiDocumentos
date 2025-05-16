import { Task } from "src/dominio/models/task";
import { TaskDto } from "../dto/task.dto";

export class TaskMapper {
    static toDomain(taskDto: TaskDto , id : string , date : Date) : Task {
        return {
            id: id,
            title: taskDto.title,
            description: taskDto.description,
            completed: taskDto.completed,
            createdAt: date,
        };
    }

    static toDto(task: Task): TaskDto {
        return {
            title: task.title,
            description: task.description,
            completed: task.completed,
        };
    }
}