import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @Transform(({ value }) => value.trim())
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @Transform(({ value }) => value.toLowerCase().trim())
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}