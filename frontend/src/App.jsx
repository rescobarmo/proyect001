import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'

console.log(import.meta.env.VITE_BACKEND_URL)

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AuthLayout />} >
          <Route index element={<Login />}/>
          <Route path="registrar" element={<Registrar />}/>
          <Route path="Olvide-Password" element={<OlvidePassword />}/>
          <Route path="Olvide-Password/:token" element={<NuevoPassword />}/>
          <Route path="Confirmar/:id" element={<ConfirmarCuenta />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
