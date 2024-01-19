import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDTO {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    profilePic: string;
   
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password:string;

}