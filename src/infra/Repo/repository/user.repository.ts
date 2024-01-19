import { Injectable } from '@nestjs/common';
import { UserModel, UserDocument } from '../schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Result } from 'src/constants/results/result';



@Injectable()
export class UserMongoRepository{

	//#region constructor
	public constructor(@InjectModel(UserModel.name) private _user: Model<UserDocument>) { }
	//#region private methods

	private async getById(ObjectId: string) {
	    return this._user.findOne({ _id: ObjectId })
	}
	async save(){
        throw new Error('Method not implemented.')
	}
	exists(): Promise<Result<boolean>> {
		throw new Error('Method not implemented.')
	}
	remove(): Promise<Result<void>> {
		throw new Error('Method not implemented.')
	}

}