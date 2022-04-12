import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoutes.js'
import proyectoRoutes from './routes/proyectoRoutes.js'

const app = express();

app.use(express.json());

dotenv.config();

// Middlewares (programas intermedios)
conectarDB();
//consfirurar cors
const whiteList = [process.env.FRONTEND_URL];

const corsOptions ={ 
    origin: function(origin, callback){

        if(whiteList.includes(origin)){
            callback(null, true)

        }else{
            callback(new Error("Error de Cors"))
        }
    },
};
app.use(cors(corsOptions));
//Routing
app.use("/api/usuarios",usuarioRoutes)
app.use("/api/proyectos",proyectoRoutes)
const PORT=  process.env.PORT || 4000;

// start  el servidor
app.listen(PORT, () =>{
    console.log(`Servicio corriendo en el puerto ${PORT}`);
});