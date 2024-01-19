import { Module } from '@nestjs/common';
import { ChatController } from '../../controller/chat.controller';

@Module({
  controllers: [ChatController]
})
export class ChatModule {}
