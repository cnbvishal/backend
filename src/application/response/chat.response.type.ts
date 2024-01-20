import { AppError } from 'src/constants/errors/app.error';
import { ChatResponseModel } from './chat.response.model';

export type ChatResponseType = ChatResponseModel | AppError;
