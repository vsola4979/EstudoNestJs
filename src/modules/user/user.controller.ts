import { Body, Controller, Post, Inject } from '@nestjs/common';
import { IUserService } from 'src/common/interfaces/user/IUserService';
import { CreateUserDto } from './dtos/createUserDto';

@Controller('user')
export class UserController {
    constructor(@Inject('IUserService') private readonly userService: IUserService) { }

    @Post('create')
    createUser(@Body() createUserDto: CreateUserDto): CreateUserDto {
        return this.userService.createUser(createUserDto);
    }
}
