import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDTO {
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsEmail()
    email: string;

}