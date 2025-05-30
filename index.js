import express from 'express';
import connectDB from './Config/db.js';
const PORT = process.env.PORT || 3000

const app = express()

connectDB()

app.get('/', (req, res)=>{
    res.send('API FUNCIONANDO')
})


app.listen(PORT, ()=>{
    console.log(`Server running on port: http://localhost:${PORT}`)
})