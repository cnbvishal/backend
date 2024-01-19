import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose'

@Injectable()
export class MongoConnectionService implements MongooseOptionsFactory {
    constructor(private readonly _envConfig: ConfigService) {}
    async createMongooseOptions(): Promise<MongooseModuleOptions> {
        return {
            uri: process.env.MONGO_URI,
        }
    }
}