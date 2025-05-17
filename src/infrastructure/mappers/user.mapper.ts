import { User } from "src/domain/models/user";
import { UserDto } from "../ports/dto/user.dto";
import { UserResponseDto } from "../ports/dto/user.response.dto";

export class UserMapper {
    static toDomain(userDto: UserDto, id : string): User {
        return {
            id: id,
            name: userDto.name,
            password: userDto.password, 
            email: userDto.email,
            createdAt: new Date(),
            isActive: userDto.isActive,

        };
    }

    static toDtoUpdate(user: User, id : number): UserDto {
        return {
            name: user.name,
            password: user.password,
            email: user.email,
            isActive: user.isActive,
        };
    }

    static toDto (user: User): UserResponseDto {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            isActive: user.isActive,
        };
    }
}