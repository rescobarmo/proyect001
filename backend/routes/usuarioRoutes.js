import express from 'express'

const router = express.Router();

import { registrar, autenticar, confirmar, olvidePassword } from '../controllers/usuarioController.js'

//Autenticacon, creacion y resgistros uauarios
router.post('/',registrar); // crear nuevo usuario
router.post('/login',autenticar); // autenticar usuario
router.get('/confirmar/:token', confirmar); // autenticar usuario
router.post('/olvide-password', olvidePassword)

export default router;

