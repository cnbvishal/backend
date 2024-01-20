import { Document,Types } from 'mongoose';

export interface IChat extends Document {
    chatName:string ,
    isGroupChat:boolean,
    users: Types.ObjectId[],
    latestMessage: string,
    groupAdmin: string,
}