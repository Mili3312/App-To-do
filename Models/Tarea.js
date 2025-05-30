import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
    id: {type: String},
    titulo:{type: String},
    descripcion:{type:String},
    estado:{type:String, enum:['PENDIENTE', 'EN PROGRESO', 'COMPLETADO'], required: true, default: "PENDIENTE"},
    prioridad: {type:String, enum:['BAJA', 'MEDIA', 'ALTA']},
    FechaCreacion: {type:Date, default:Date.now},
    FechaLimite: {
      type: Date, 
    },
    etiqueta:{type:[String]},
    userId: {type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
    
},
{timestamps:true}
)

export default mongoose.model('Tarea', tareaSchema);