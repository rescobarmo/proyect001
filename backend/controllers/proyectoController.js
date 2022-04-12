import Proyecto from "../models/Proyectos.js";

const obtenerProyectos = async (req, res) => {
    const proyecto = await Proyecto.find().where("creador").equal(req.usuario);

    res.json(proyecto);


};

const nuevoProyecto = async (req, res) => {

    const proyecto = new Proyecto(req.body)
    proyecto.creador = req.usuario._id;

    try {
        const proyectoAlacenado = await proyecto.save();
        res.json(proyectoAlacenado)
        
    } catch (error) {
        console.log(error)
    }

};

const obtenerProyecto = async (req, res) => {
    const { id } = req.params;// leer el proyecto   
    const proyecto = await Proyecto.findById(id); // leer el proyecto   

    if (!proyecto){ //verifico que existe 
        const error = new Error ("No Encontrado")
        return res.status(404).json({msg: error.message})
    } 

    if (proyecto.creador.toString() !== req.usuario._id.toString() ){ //verifica que la persona quew lo creo ahara las modificacioones 
        const error = new Error ("No Accion no Valida")
        return res.status(404).json({msg: error.message})
    }

    res.json(proyecto)
};

const editarProyecto = async (req, res) => {
    const { id } = req.params;// leer el proyecto   
    const proyecto = await Proyecto.findById(id); // leer el proyecto   

    if (!proyecto){ //verifico que existe 
        const error = new Error ("No Encontrado")
        return res.status(404).json({msg: error.message})
    } 

    if (proyecto.creador.toString() !== req.usuario._id.toString() ){ //verifica que la persona quew lo creo ahara las modificacioones 
        const error = new Error ("No Accion no Valida")
        return res.status(404).json({msg: error.message})
    }

    proyecto.nombre = req.body.nombre ||  proyecto.nombre;
    proyecto.descripcion = req.body.descripcion ||  proyecto.descripcion;
    proyecto.fechaEntrega = req.body.fechaEntrega ||  proyecto.fechaEntrega;
    proyecto.clientes = req.body.clientes ||  proyecto.clientes;

    try {
        const proyectoAlacenado = await proyecto.save();
        res.json(proyectoAlacenado)
    } catch (error) {
        console.log(error)
    }

};

const eliminarProyecto = async (req, res) => {

    const { id } = req.params;// leer el proyecto   
    const proyecto = await Proyecto.findById(id); // leer el proyecto   

    if (!proyecto){ //verifico que existe 
        const error = new Error ("No Encontrado")
        return res.status(404).json({msg: error.message})
    } 

    if (proyecto.creador.toString() !== req.usuario._id.toString() ){ //verifica que la persona quew lo creo ahara las modificacioones 
        const error = new Error ("No Accion no Valida")
        return res.status(404).json({msg: error.message})
    }

    try {
        await proyecto.deleteOne();
        res.json({msg:"Proyecto Eliminado"})

    } catch (error) {
        console.log(error)
    }


};

const agregarColaborador = async (req, res) => {};

const eliminarColaborador = async (req, res) => {};

const obtenerTareas = async (req, res) => {};

export {
    obtenerProyectos,
    nuevoProyecto,
    obtenerProyecto,
    editarProyecto,
    eliminarProyecto,
    agregarColaborador,
    eliminarColaborador,
    obtenerTareas
};