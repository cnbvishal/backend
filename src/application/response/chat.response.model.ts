export class ChatResponseModel {
   chatName:string;
   isGroupChat:boolean;
   latestMessage: string;
   groupAdmin: string;
   constructor(init?: Partial<ChatResponseModel>) {
		Object.assign(this, init);
	}
}