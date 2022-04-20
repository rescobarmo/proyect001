import { useState } from "react"
import useProyectos from '../hooks/useProyectos';
import AlertaPositiva from "./AlertaPositiva";

const FormularioProyecto = () => {
const [nombre, setNombre] =useState('')
const [descripcion, setDescripcion] =useState('')
const [fechaEntrega, setFechaEntrega] =useState('')
const [clientes, setClientes] =useState('')
const {mostarAlerta, alerta,submitProyecto} = useProyectos()

const handleSubmit = async e =>  {
    e.preventDefault();

    
    if([nombre,descripcion, fechaEntrega,clientes].includes('')){
        mostarAlerta({
            msg:'Todos los Campos Son Obligatorios',
            error:true
        });
        return
    }
    await submitProyecto({nombre,descripcion,fechaEntrega,clientes})
    setNombre('')
    setDescripcion('')
    setFechaEntrega('')
    setClientes('')

}
const {msg} = alerta

  return (
    <form className="bg-white py-10 px-5 md:w-1/2 rounded-lg" 
    onSubmit={handleSubmit}
    >
        {msg && <AlertaPositiva alertaPositiva={alerta}/>}
        <div className="mb-5">
            <label 
                className="text-gray-700 uppercase font-bold text-sm shadow-sm"
                htmlFor= "nombre">
                    Nuevo Proyecto
                </label>

                <input 
                id="nombre"
                type="text"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400
                rounded-md"
                placeholder="Nombre del Proyecto"
                value={nombre}
                onChange={e => setNombre(e.target.value) }
                />
        </div>

        <div className="mb-5">
            <label 
                className="text-gray-700 uppercase font-bold text-sm shadow-sm"
                htmlFor= "descripcion">
                    Descripcion
                </label>

                <textarea 
                id="descripcion"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400
                rounded-md"
                placeholder="Descripcion del Proyecto"
                value={descripcion}
                onChange={e => setDescripcion(e.target.value) }
                />
        </div>

        <div className="mb-5">
            <label 
                className="text-gray-700 uppercase font-bold text-sm shadow-sm"
                htmlFor= "fecha-entrega">
                    Fecha de Entrega
                </label>

                <input 
                id="fecha-entrega"
                type="date"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400
                rounded-md"
                value={fechaEntrega}
                onChange={e => setFechaEntrega(e.target.value) }
                />
        </div>

        <div className="mb-5">
            <label 
                className="text-gray-700 uppercase font-bold text-sm shadow-sm"
                htmlFor= "clientes">
                    Cliente
                </label>

                <input 
                id="clientes"
                type="text"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400
                rounded-md"
                placeholder="Nombre del Cliente"
                value={clientes}
                onChange={e => setClientes(e.target.value) }
                />
        </div>

        <input
            type="submit"
            value="Crear Proyecto"
            className="bg-sky-600 w-full p-3 uppercase text-white 
            rounded cursor-pointer hover:bg-sky-700 transition-colors"
            />
    </form>
  )
}

export default FormularioProyecto