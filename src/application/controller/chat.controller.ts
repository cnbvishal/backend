import { BadRequestException, Body,  HttpStatus,Controller, NotFoundException, Post, Req, Res } from '@nestjs/common';
import { ChatService } from '../modules/chat/chat.service';
import { ChatDTO } from '../modules/chat/dto/chat.dto';
import { Result } from 'src/constants/results/result';

@Controller('chat')
export class ChatController {
    constructor(private chatService:ChatService){}
    @Post()
    async createUser(@Req() req, @Res() res, @Body() ChatDTO: ChatDTO) {
      try {
        const new_chat = await this.chatService.create(ChatDTO);
        if (!new_chat) {
          throw new NotFoundException('New Chat Creation Failed');
        }
        return res.status(HttpStatus.OK).json({
          message: 'Chat Created Successfully',
          data: { user: new_chat },
        });
      } catch (error) {
        throw new BadRequestException(error.message);
      }
    }
}
