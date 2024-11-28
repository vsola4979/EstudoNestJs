import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from '../../database/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IUserService } from 'src/common/interfaces/user/IUserService';

@Module({
  providers: [
    {
      provide: 'IUserService',
      useClass: UserService,
    },
  ],
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([UserEntity])],
})
export class UserModule {}