import mongoose from "mongoose";



const tareaSchema = new mongoose.Schema({
    titulo:{type: String},
    descripcion:{type:String},
    estado:{
        type:String,
        enum:['PENDIENTE', 'EN PROGRESO', 'COMPLETADA'],
        required: true, 
        default: "PENDIENTE"},
    prioridad: {
        type:String,
        enum:['BAJA', 'MEDIA', 'ALTA']},
        default:'MEDIA',
    FechaCreacion: {
       type:Date,
       default:Date.now},
    FechaLimite: {
       type: Date, 
    },
    etiqueta:{type:[String]},
    userId: {
       type:mongoose.Schema.Types.ObjectId,
       ref: 'User', 
       required: true,
       index:true,
      },
    listaId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Lista',
       index:true,
    },
    tareaPadreId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Tarea',
      default:null,
      index: true
    },
    subTarea:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Tarea'
    }]
},
{timestamps:true}
)

tareaSchema.index({ titulo: 'text', descripcion: 'text' });

export default mongoose.model('Tarea', tareaSchema);