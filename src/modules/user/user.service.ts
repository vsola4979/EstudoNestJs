import { ConflictException, Injectable } from '@nestjs/common';
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

    async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
        const { email } = createUserDto;

        // Verifica se o email já existe no banco de dados
        const existingUser = await this.userRepository.findOne({ where: { email } });

        if (existingUser) {
            throw new ConflictException('Email already in use');
        }

        // Código para criar o usuário aqui, se o email for único
        const user = this.userRepository.create(createUserDto);
        await this.userRepository.save(user);

        return createUserDto;
    }


    findUserById(id: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
}
