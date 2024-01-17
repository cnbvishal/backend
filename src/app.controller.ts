import { Controller, Get } from '@nestjs/common';
import { Result } from './constants/results/result';

@Controller()
export class AppController {
  @Get('/health')
	async getHello() {
		return Result.ok('chat app is running');
	}
}
