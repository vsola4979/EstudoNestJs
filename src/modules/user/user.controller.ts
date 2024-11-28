import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IUserService } from 'src/common/interfaces/user/IUserService';


@Controller('user')
export class UserController {
    constructor(private readonly userService: IUserService) { }

    // @Get('/:id')
    // findUser(@Param('id') id: string): IGetUserResponse {
    //     return this.userService.findUserById();
    // }

    @Post('create')
    createUser(@Body() createUserDto: createUserDto): ICreateUserResponse {
        return this.userService.createUser(createUserDto);
    }

}
