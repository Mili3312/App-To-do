
import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    clerkUserId: z.string(),
    nombre: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    listas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lista'
    }]
},{timestamps: true})

export default mongoose.model('User', UserSchema);