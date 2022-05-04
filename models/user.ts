import mongoose, {Model} from "mongoose";
import {UserObj} from "../utils/types";

const UserSchema = new mongoose.Schema({
    email: { required: true, type: String },
    name: { required: true, type: String },
    image: { required: true, type: String },
    username: { required: true, type: String },
}, {
    timestamps: true,
});

export const UserModel = (!!mongoose.models && mongoose.models.user as Model<UserObj>) || mongoose.model<UserObj>("user", UserSchema);