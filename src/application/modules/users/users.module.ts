import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from '../../../infra/schemas/users.schemas';
import { UsersController } from '../../controller/users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      { 
        name: 'Users', 
        useFactory: () => {
          const schema = UsersSchema
          return schema;
        },
    }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService] 
})
export class UsersModule {}
