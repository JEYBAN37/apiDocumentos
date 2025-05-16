import { IsNotEmpty, IsString } from "class-validator";

export class TaskDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    completed: boolean;

    constructor( title: string, description: string, status: boolean) {
        this.title = title;
        this.description = description;
        this.completed = status;
    }
}