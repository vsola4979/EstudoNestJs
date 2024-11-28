import { Injectable } from '@nestjs/common';
import { IUserService } from '../../common/interfaces/user/IUserService';
import { CreateUserDto } from './dtos/createUserDto';
import { UserEntity } from '../../database/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService implements IUserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }

    createUser(createUserDto: CreateUserDto): CreateUserDto {
        try {
            const user = this.userRepository.create(createUserDto);
            this.userRepository.save(user);
            return createUserDto;
        } catch (error) {
            throw error;
        }
    }

    findUserById(id: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
}
