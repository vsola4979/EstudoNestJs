import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dtos/userDto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('/:id')
    findUser(@Param('id') id: string): UserDto {
        return this.userService.findUser();
    }

}
