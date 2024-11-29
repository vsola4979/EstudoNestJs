import { Body, Controller, Post, Inject, Get } from '@nestjs/common';
import { IUserService } from 'src/common/interfaces/user/IUserService';
import { CreateUserDto } from './dtos/createUserDto';

@Controller('user')
export class UserController {
    constructor(@Inject('IUserService') private readonly userService: IUserService) { }


    @Get()
    getUsers() {
        return 'Hello world'
    }

    @Post('create')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
        return await this.userService.createUser(createUserDto);
    }
}
