import mongoose, {Schema, Document} from "mongoose";
// Documents for Type Safety:

// This code defines a Mongoose schema and interface for a "Message" model,
// which represents a message with content and a creation date.
export interface Message extends Document{
  content: string;
  createdAt : Date
}


// Defines the schema and model for a "Message" with content and creation date.
const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});


/**
 * Represents a user model with properties for authentication, 
 * verification, messaging preferences, and associated messages.
 */
export interface User extends Document{
  username : string;
  email: string;
  password: string;
  verifyCode : string;
  verifyCodeExpiry : Date,
  isVerified : boolean,
  isAcceptingMessage : boolean;
  messages: Message[];
}

// Defines the schema and model for a "Message" with content and creation date.
const UserSchema: Schema<User> = new Schema({
  username : {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique :true
  },
  email : {
    type: String,
    required : [true, "Email is required"],
    unique: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please use a valid email address']
  },
  password :{
    type: String,
    required: [true, "Password is required"]
  },
  verifyCode : {
    type: String,
    required: [true, "Verify Code is Required"]
  },
  verifyCodeExpiry : {
    type: Date,
    required : [true, "Verify Code Expiry is Required"]
  },
  isVerified : {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage : {
    type: Boolean,
    default: true,
  },
  messages : [MessageSchema]

});

/**
 * Represents the Mongoose model for the "User" collection.
 * This model is either retrieved from the existing Mongoose models cache
 * or created using the provided `UserSchema` if it does not already exist.
 *
 * @type {mongoose.Model<User>}
 */
const UserModel = (mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", UserSchema))

export default UserModel;