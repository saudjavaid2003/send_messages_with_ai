import mongoose, { Schema, Document } from 'mongoose';

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  messages: Message[];
  verifyCode: string;
  isVerified:boolean;
  verifyCodeExpiry: Date;
  isAcceptingMessages: boolean;
}

const UserSchema: Schema<User> = new Schema({
  username: { type: String, required: true ,trim:true,unique: true},
  email: { type: String, required: true,unique:true, trim: true,match: [/.+\@.+\..+/ ,"please enter a valid email"]},
  password: { type: String, required:[true,"please enter your password"] },
  messages: [MessageSchema],
    isVerified: { type: Boolean, default: false },
  verifyCode: { type: String, required: true },
  verifyCodeExpiry: { type: Date, required: true },
  isAcceptingMessages: { type: Boolean, default: true }
});

export const UserModel = mongoose.model<User>('User', UserSchema);
// export const MessageModel = mongoose.model<Message>('Message', MessageSchema);
