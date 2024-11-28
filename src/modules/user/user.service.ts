import { Injectable } from '@nestjs/common';
import { IUserService } from 'src/common/interfaces/user/IUserService';

@Injectable()
export class UserService implements IUserService {

    findUserById(id: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
}
