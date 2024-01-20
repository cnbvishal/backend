import { BadRequestException, Body,  HttpStatus,Controller, NotFoundException, Post, Req, Res } from '@nestjs/common';
import { ChatService } from '../../modules/chat/chat.service';
import { ChatDTO } from '../../modules/chat/dto/chat.dto';
import { Result } from 'src/constants/results/result';
import { ChatResponseModel } from '../response/chat.response.model';

@Controller('chat')
export class ChatController {
    constructor(private chatService:ChatService){}
    @Post()
    async createUser(@Req() req, @Res() res, @Body() ChatDTO: ChatDTO):Promise<Result<ChatResponseModel>> {
      try {
        const new_chat = await this.chatService.create(ChatDTO);
        if (!new_chat) {
          throw new NotFoundException('New Chat Creation Failed');
        }
        const result=Result.ok<ChatResponseModel>({
          chatName:new_chat.chatName,
          isGroupChat:new_chat.isGroupChat,
          latestMessage: new_chat.latestMessage,
          groupAdmin: new_chat.groupAdmin,
        })
        return res.status(HttpStatus.CREATED).json(result.getValue());
      } catch (error) {
        throw new BadRequestException(error.message);
      }
    }
}
