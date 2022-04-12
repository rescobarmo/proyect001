import {useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import AlertaPositiva from '../components/AlertaPositiva'
import clienteAxios from '../../config/clienteAxios'


const ConfirmarCuenta = () => {
  const params = useParams();
  const {id} = params
  const [ alertaPositiva, setAlertaPositiva] = useState({})
  const [ cuentaConfirmada, setCuentaConfirmada] = useState(false)

  useEffect(()=> {
    const confirmarCuenta = async () =>{
      try {
        const { data }  = await clienteAxios.get(`/usuarios/confirmar/${id}`)
        setAlertaPositiva({
          msg:data.msg,
          error:false
        })
        setCuentaConfirmada(true)
        
      } catch (error){
        setAlertaPositiva({
          msg:error.response.data.msg,
          error:true
        })
        
      }
    }
    confirmarCuenta();
  },[] )
  const {msg} = alertaPositiva
  return (
    <>
        <h1 className="text-sky-600 font-black text-6xl capitalize">Confirma tu cuenta y Comienza a crear tus  
          <span className="text-slate-700"> proyectos</span>
        </h1>
      <div>
        { msg && <AlertaPositiva alertaPositiva= {alertaPositiva} />}
        {cuentaConfirmada && (
          <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/"
            > Inicia Session
          </Link>
        )

        }
      </div>
    </>
  )
}

export default ConfirmarCuenta
