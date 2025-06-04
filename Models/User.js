import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    clerkUserId:{type: String, unique: true, index: true, required: true},
    nombre:{type:String, required: true, trim:true},
    email:{type:String, required:true},
    listas:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Lista'
    }],
},
{timestamps:true}
)

export default mongoose.model('User', UserSchema);