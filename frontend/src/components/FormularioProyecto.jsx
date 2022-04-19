import { useState } from "react"

const FormularioProyecto = () => {
const [nombre, setNombre] =useState('')
const [descripcion, setDescripcion] =useState('')
const [fechaEntrega, setFechaEntrega] =useState('')
const [cliente, setCliente] =useState('')
const handleSubmit = e => {
    e.preventDefault();
}


  return (
    <form className="bg-white py-10 px-5 md:w-1/2 rounded-lg" 
    onSubmit={handleSubmit}
    >
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
                value=""
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
                id="nombre"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400
                rounded-md"
                placeholder="Descripcion del Proyecto"
                value={nombre}
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
                htmlFor= "cliente">
                    Cliente
                </label>

                <input 
                id="cliente"
                type="text"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400
                rounded-md"
                placeholder="Nombre del Cliente"
                value={cliente}
                onChange={e => setCliente(e.target.value) }
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