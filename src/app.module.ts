import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ConfigurationModule } from './infra/configuration/mongo-configuration.module';

@Module({
  imports: [ConfigurationModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
