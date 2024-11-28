import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from '../../database/entities/user.entity';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [UserEntity],
})

export class UserModule { }
