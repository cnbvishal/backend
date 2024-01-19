import {Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/users.interface';
import {UserDTO} from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private UsersModel: Model<IUser>,
  ) {}

  async create(createUserDTO: UserDTO): Promise<IUser> {
  
    const create_user: any = createUserDTO;
    const created_user = new this.UsersModel(create_user);
    return created_user.save();
  }

}
