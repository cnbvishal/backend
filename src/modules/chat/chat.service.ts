import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IChat } from './interfaces/chat.interface';
import { Model } from 'mongoose';
import {ChatDTO} from './dto/chat.dto';
@Injectable()
export class ChatService {
  constructor(
    @InjectModel('chat') private chatModel: Model<IChat>
  ) {}

  async create(chatDTO: ChatDTO): Promise<IChat> { 
    const create_chat: any = chatDTO;
    const created_chat = new this.chatModel(create_chat);
    return created_chat.save();
  }

}
