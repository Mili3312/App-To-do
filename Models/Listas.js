import mongoose from "mongoose";

const listaSchema = new mongoose.Schema({
    nombre: { 
        type: String,
        required: true, 
        trim: true },
    descripcion: { 
        type: String, 
        trim: true, 
        default: '' },
    color: { 
        type: String, 
        trim: true }, 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
}, { timestamps: true })

export default mongoose.model('Tarea', tareaSchema);