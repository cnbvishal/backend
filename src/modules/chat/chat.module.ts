import { Module } from '@nestjs/common';
import { ChatController } from '../../application/controller/chat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatSchema } from 'src/infra/schemas/chat.schemas';
import { ChatService } from './chat.service';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      { 
        name: 'chat', 
        useFactory: () => {
          const schema = ChatSchema
          return schema;
        },
    }]),
  ],
  controllers: [ChatController],
  providers: [ChatService],
  exports: [ChatService],
})
export class ChatModule {}
