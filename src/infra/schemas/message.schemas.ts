import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      trim: true,
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
    }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false },
);
