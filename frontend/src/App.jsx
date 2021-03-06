import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import {AuthProvider} from './context/AuthProvider'
import {ProyectosProvider} from './context/ProyectosProvider'
import Proyectos from './paginas/Proyectos'
import NuevoProyecto from './paginas/NuevoProyecto'
import RutaProtegida from './layouts/RutaProtegida'
console.log(import.meta.env.VITE_BACKEND_URL)

function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
    <ProyectosProvider>
      <Routes>

        <Route path="/" element={<AuthLayout />} >
          <Route index element={<Login />}/>
          <Route path="registrar" element={<Registrar />}/>
          <Route path="Olvide-Password" element={<OlvidePassword />}/>
          <Route path="Olvide-Password/:token" element={<NuevoPassword />}/>
          <Route path="Confirmar/:id" element={<ConfirmarCuenta />}/>
        </Route>
        <Route path="/proyectos" element={<RutaProtegida />} >
          <Route index element={<Proyectos />}/>
          <Route path="crear-proyecto" element={<NuevoProyecto />}/>
        </Route>

      </Routes>
    </ProyectosProvider>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
