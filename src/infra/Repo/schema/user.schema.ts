import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'
import { Base } from './base.schema'

export type UserDocument = UserModel & Document

@Schema()
export class UserModel extends Base {
	public constructor(init?: Partial<UserModel>) {
		super()
		Object.assign(this, init)
	}

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Base' })
	base: Base

	@Prop()
	name: string
}

export var UserSchema = SchemaFactory.createForClass(UserModel)