import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  NotFoundException,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../modules/users/users.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserDTO } from '../modules/users/dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiBearerAuth()
  @UseGuards()
  @Post()
  async createUser(@Req() req, @Res() res, @Body() createUserDTO: UserDTO) {
    try {

      const new_user = await this.usersService.create(createUserDTO);
      if (!new_user) {
        throw new NotFoundException('New User Creation Failed');
      }
      return res.status(HttpStatus.OK).json({
        message: 'User Created Successfully',
        data: { user: new_user },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
   
}
