import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express();

app.use(express.json());

dotenv.config();

// Middlewares (programas intermedios)
conectarDB();

//Routing
app.use("/api/usuarios",usuarioRoutes)

const PORT=  process.env.PORT || 4000;

// start  el servidor
app.listen(PORT, () =>{
    console.log(`Servicio corriendo en el puerto ${PORT}`);
});