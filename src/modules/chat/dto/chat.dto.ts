import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ChatDTO {

    @ApiProperty({
        description: 'chatName',
        example: 'char',
        required: true,
    })
    @IsString()
    chatName: string;

    @ApiProperty({
        description: 'isGroupChar',
        example: 'chart',
        required: false,
    })
    isGroupChat: boolean;
    
    @ApiProperty({
        description: 'users',
        example: '5f91647012c7d150addcc226',
        required: true,
    })
    @IsArray()
    users:string[];
    @ApiProperty({
        description: 'latestMessage',
        example: 'hiii',
        required: true,
    })
    @IsString()
    latestMessage:string;

    @ApiProperty({
        description: 'groupAdmin',
        example: '5f91647012c7d150addcc226',
        required: true,
    })
    @IsString()
    groupAdmin:string
}