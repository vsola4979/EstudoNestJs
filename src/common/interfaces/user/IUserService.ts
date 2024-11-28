export interface IUserService {
    findUserById(
        id: string
    ): Promise<any>;
}