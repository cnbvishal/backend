import {ConfigService} from '@nestjs/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { EnvKeyConstants } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true,bodyParser:true});

  const appConfig=app.get(ConfigService)
  //api route prefix
	app.setGlobalPrefix(`${appConfig.get(EnvKeyConstants.APP_ROUTE_PREFIX)}`);

	// swagger
	const config = new DocumentBuilder()
		.setTitle('Chat')
		.setDescription('nest-boilerplate Api')
		.setVersion('1.0')
		.addTag('Chat')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);
	
	await app.listen(appConfig.get(EnvKeyConstants.APP_PORT));
	console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
