import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from "@nestjs/common";
import { UseCaseTask } from "src/dominio/usecase/usecase.task";
import { Response } from 'express';
import { TaskDto } from "../adapter/dto/task.dto";
@Controller('api/v1')
export class TaskController {
    constructor(private readonly taskUseCase: UseCaseTask) {}

    @Get('tasks')
    async getAllTasks(@Res() res: Response,@Query('pag') pag : number, @Query('withPag') withpag : number): Promise<Response> {
        const tasks = await this.taskUseCase.findAll(pag, withpag);
        return res.status(HttpStatus.OK).json(tasks);
    }

    @Get('tasks/byId')
    async getTaskById(@Res() res: Response, @Query('id') id: string): Promise<Response> {
        const task = await this.taskUseCase.findById(id);
        return res.status(HttpStatus.OK).json(task);
    }

    @Post('tasks')
    async createTask(@Res() res: Response, @Body() task: TaskDto): Promise<Response> {
        const createdTask = await this.taskUseCase.create(task);
        return res.status(HttpStatus.CREATED).json(createdTask);
    }

    @Put('tasks/')
    async updateTask(@Res() res: Response,@Query('id') id: string,@Body() task: TaskDto): Promise<Response> {
        const updatedTask = await this.taskUseCase.update(id, task);
        return res.status(HttpStatus.OK).json(updatedTask);
    }

    @Delete('tasks/')
    async deleteTask(@Res() res : Response,@Query('id') id: string): Promise<Response> {
        await this.taskUseCase.delete(id);
        return res.status(HttpStatus.ACCEPTED).send();
    }

    @Put('tasks/complete')
    async completeTask(@Res() res: Response, @Query('id') id: string): Promise<Response> {
        const completedTask = await this.taskUseCase.complete(id);
        return res.status(HttpStatus.OK).json(completedTask);
    }


}