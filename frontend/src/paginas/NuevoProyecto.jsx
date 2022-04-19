import FormularioProyecto from "../components/FormularioProyecto"

const NuevoProyectos = () => {
    return (
      <>
      <h1 className="text-4xl font-black">
      Crear Proyeto
      </h1>
      <div className="mt-10 flex justify-center"> 
      <FormularioProyecto></FormularioProyecto>
      </div>
      </>
    )
  }
  
  export default NuevoProyectos