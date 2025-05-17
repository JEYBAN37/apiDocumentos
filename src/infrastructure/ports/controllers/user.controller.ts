import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query, Res } from "@nestjs/common";
import { UserUsecase } from "src/domain/usecase/user.usecase";
import { Response } from 'express';
import { UserDto } from "../dto/user.dto";

@Controller("api/v1")
export class UserController {
    constructor(private readonly userService: UserUsecase) {}

    @Get("users")
    async getAllUsers(@Res() res: Response,@Query('pag') pag : number , @Query('limit') limit : number): Promise<Response> {
        const users = await this.userService.findAll(pag, limit);
        return res.status(HttpStatus.OK).json(users);
    }

    @Get("users/byId/")
    async getUserById(@Res() res: Response, @Query('id') id: string): Promise<Response> {
        const user = await this.userService.findById(id);
        return res.status(HttpStatus.OK).json(user);
    }

    @Post("users")
    async createUser(@Res() res: Response, @Body() user: UserDto): Promise<Response> {
        const newUser = await this.userService.create(user);
        return res.status(HttpStatus.CREATED).json(newUser);
    }

    @Put("users")
    async updateUser(@Res() res: Response, @Query('id') id: string, @Body() userUpdate : UserDto): Promise<Response> {
        const updatedUser = await this.userService.update(id, userUpdate);
        return res.status(HttpStatus.OK).json(updatedUser);
    }

    @Delete("users")
    async deleteUser(@Res() res: Response, @Query('id') id: string): Promise<Response> {
        await this.userService.delete(id);
        return res.status(HttpStatus.NO_CONTENT).send();
    }
}
