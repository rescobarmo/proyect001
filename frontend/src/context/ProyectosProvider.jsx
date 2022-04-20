import {useState, useEffect , createContext} from 'react'
import clienteAxios from '../config/clienteAxios'
import { useNavigate } from 'react-router-dom';



const ProyectosContext = createContext();

const ProyectosProvider = ({children}) => {

    const [proyectos, setProyectos] = useState([])
    const [alerta,setAlerta] = useState([])
   const navigate = useNavigate()
    const mostarAlerta = alerta =>{
        setAlerta(alerta);

        setTimeout(() => {
            setAlerta({})
        }, 5000);
        
    }

    const submitProyecto = async proyecto =>{
        try {
            const token = localStorage.getItem('token')
            if(!token)return
            const config = {
                        headers:{
                            "Content-Type":"application/json",
                            Authorization :`Bearer ${token}`
                        }
                    }
            const {data} = await clienteAxios.post('/proyectos',proyecto,config);
            
            setAlerta({
                msg:'Proyecto Creado Correctamente',
                error:false
            })
            setTimeout(() => {
                setAlerta({})
                navigate('/proyectos')
            }, 3000);

        } catch (error) {
            console.log(error)
        }
    }
    return(
        <ProyectosContext.Provider
            value={{
                proyectos,
                mostarAlerta,
                alerta,
                submitProyecto
            }}
        >{children}

        </ProyectosContext.Provider>

    )
}
export {
    ProyectosProvider
}
export default ProyectosContext