import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectId } from 'typeorm';


export type BaseDocument = Base & Document;
@Schema()
export class Base {
 
  @Prop({ type: String, default: function genObjectId() {
    return ObjectId
        }})
    _id: string

  @Prop()
  CreatedBy: string;

  @Prop()
  ModifiedBy: string;

  @Prop()
  CreatedOn: Date;

  @Prop()
  DeletedOn: Date;

  
}

export const BaseSchema = SchemaFactory.createForClass(Base);