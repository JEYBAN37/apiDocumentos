import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  email: string;

  @IsBoolean()
  isActive: boolean;

}