import { UserMapper } from "src/infrastructure/mappers/user.mapper";
import { UserRepository } from "../interfaces/user.repository";
import { UserResponseDto } from "src/infrastructure/ports/dto/user.response.dto";
import { User } from "../models/user";
import { UserDto } from "src/infrastructure/ports/dto/user.dto";

export class UserUsecase {
    constructor(private readonly userRepository: UserRepository) {}

    async findAll(pag ?: number, limit ?: number): Promise<UserResponseDto[]> {
        const users = await this.userRepository.findAll(pag, limit);
        if (!users || users.length === 0) return [];
        return users.map((user) => UserMapper.toDto(user)); 
    }

    async findById(id: string): Promise<UserResponseDto> {
        return UserMapper.toDto(await this.userRepository.findById(id));
    }

    async create(user: UserDto): Promise<UserResponseDto> {
        const idGenerate = Math.floor(Math.random() * 1000).toString();
        return UserMapper.toDto(await this.userRepository.create(UserMapper.toDomain(user, idGenerate)));
    }
    
    async update(id: string, user: UserDto): Promise<UserResponseDto> {
        return UserMapper.toDto(await this.userRepository.update(id, UserMapper.toDomain(user, id)));
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}