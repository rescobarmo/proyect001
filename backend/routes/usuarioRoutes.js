import express from 'express'

const router = express.Router();

import { 
        registrar, 
        autenticar, 
        confirmar, 
        olvidePassword,
        comprobarToken,
        nuevoPassword,
        perfil
    } 
from '../controllers/usuarioController.js'

import checkAuth from "../middleware/chaeckAuth.js"


//Autenticacon, creacion y resgistros uauarios
router.post('/',registrar); // crear nuevo usuario
router.post('/login',autenticar); // autenticar usuario
router.get('/confirmar/:token', confirmar); // autenticar usuario
router.post('/olvide-password', olvidePassword)
router.get('/olvide-password/:token', comprobarToken); // definir nueva password 
router.post('/nuevo-password/:token', nuevoPassword); // definir nueva password 

router.get('/perfil', checkAuth, perfil); // definir nueva password 
export default router;

