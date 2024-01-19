import * as path from 'path'
import { Global, Module } from '@nestjs/common'
import { ConfigModule} from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { MongoConnectionService } from './mongo-config.service'

@Global()
@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: path.resolve(process.cwd(), 'env', `.${process.env.APP_ENV || 'local'}.env`),
		}),
		MongooseModule.forRootAsync({ useClass: MongoConnectionService}),
	],
	providers: [],
	exports: [],
})
export class ConfigurationModule { }