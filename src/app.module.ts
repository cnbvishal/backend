import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigurationModule } from './infra/configuration/mongo-configuration.module';
import { UsersModule } from './application/modules/users/users.module';
import { ChatModule } from './application/modules/chat/chat.module';

@Module({
  imports: [ConfigurationModule, UsersModule, ChatModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
