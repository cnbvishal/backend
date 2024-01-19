import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic:{
      type:String,
      default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile&psig=AOvVaw3k88m5Ghdjy4xkMLcnO0O8&ust=1705760404766000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCPDq-OnS6YMDFQAAAAAdAAAAABAE'
    }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false },
);
