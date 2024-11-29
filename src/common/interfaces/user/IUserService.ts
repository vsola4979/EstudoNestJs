import { CreateUserDto } from "src/modules/user/dtos/createUserDto";

export interface IUserService {
    findUserById(id: string): Promise<any>;
    createUser(createUserDto: CreateUserDto): Promise<CreateUserDto>;
}