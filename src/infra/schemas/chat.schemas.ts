import * as mongoose from 'mongoose';

export const ChatSchema = new mongoose.Schema(
  {
    chatName: {
      type: String,
      required: true,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false },
);
