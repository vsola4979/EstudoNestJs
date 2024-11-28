import { Injectable } from '@nestjs/common';
import { UserDto } from './dtos/userDto';

@Injectable()
export class UserService {

    findUser(): UserDto {
        return {
            id: '1',
            username: 'john',
            password: 'password',
        };
    }

}
