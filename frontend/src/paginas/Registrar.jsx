import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Formik, Form, Field,ErrorMessage } from 'formik'
import axios from 'axios';
import * as Yup from 'yup'
import Alerta from '../components/Alert'
import AlertaPositiva from '../components/AlertaPositiva'
import clienteAxios from '../../config/clienteAxios'

const Registrar = () => {
   
  const [ alertaPositiva, setAlertaPositiva] = useState({})
  
    const nuevaCuentaSchema = Yup.object().shape({
      nombre: Yup.string()
                .min(3,'El Nombre es muy corto')
                .required('Ingrese Nombre'),
      email :Yup.string()
                .min(3,'El Email de muy corto')
                .required('Ingrese Email')
                .email('Email no valido'),
      password :Yup.string()
                .min(4,'La PassWord minimo caracteres son 4')
                .max(8,'La PassWord maxino caracteres son 8')
                .required('Ingrese PassWord'),
      repetirPassword :Yup.string()
                .min(4,'La PassWord minimo caracteres son 4')
                .max(8,'La PassWord maxino caracteres son 8')
                .required('Ingrese Repetir PassWord')
                .oneOf([Yup.ref('password')], 'Las Passwords Diferentes')
     
    })
  
    const handleSubmit = async (valores) => {
      const nombre = valores.nombre;
      const email = valores.email;
      const password = valores.password;
        try {
          const { data }  = await clienteAxios.post(`/usuarios`, 
                                              { 
                                                nombre,
                                                email,
                                                password
                                              }); 
          console.log(data.msg);
          setAlertaPositiva({
            msg:data.msg,
            error:false
          })
          return

        } catch (error) {
          setAlertaPositiva({
            msg:error.response.data.msg,
            error:true
          })
          return
        }
    } 

    const {msg} = alertaPositiva

  return (
    <>
        <h1 className="text-sky-600 font-black text-6xl capitalize">Crea tu cuenta y administra tus  
          <span className="text-slate-700"> proyectos</span>
        </h1>
        { msg && <AlertaPositiva alertaPositiva= {alertaPositiva} />}
    <Formik
          initialValues={{
          nombre:'',
          email:'',
          password :'',
          repetirPassword :'',
        }} 
        onSubmit = {async (valores,{resetForm}) => {
         
          handleSubmit(valores)
          resetForm()
        }          
        }
        validationSchema={nuevaCuentaSchema}
      >

        {({errors, touched}) => {
            //console.log(touched)
       

        return(
          
          <Form  
          
            
            className="my-10 bg-white shadow rounded-lg px-10 py-10">

         

            <div className="my-5">
           
              <label className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="nombre"
              >Nombre</label>
              <Field
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu Nombre"
                className=" w-full mt-3 p-3 border rounded-xl bg-gray-50"
               
               
              />
               {errors.nombre && touched.nombre ? (
                <Alerta> {errors.nombre}</Alerta>
                ) : null}
            </div>

            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="email"
              >Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email de registro"
                className=" w-full mt-3 p-3 border rounded-xl bg-gray-50"
                
               
              />
               {errors.email && touched.email ? (
                <Alerta> {errors.email}</Alerta>
                ) : null}
            </div>

            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password"
              >Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Password de registro"
                className=" w-full mt-3 p-3 border rounded-xl bg-gray-50"
                
               
              />
              {errors.password && touched.password ? (
                <Alerta> {errors.password}</Alerta>
                ) : null}

            </div>

            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password2"
              >Repetir Password</label>
              <Field
                id="repetirPassword"
                name="repetirPassword"
                type="password"
                placeholder="Repetir tu Password"
                className=" w-full mt-3 p-3 border rounded-xl bg-gray-50"
                
                
              />
                {errors.repetirPassword && touched.repetirPassword ? (
                <Alerta> {errors.repetirPassword}</Alerta>
                )  : null}
            </div>

            <input
              type="submit"
              value="Craer Cuenta"
              className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
              />
          </Form>
        )}}
      </Formik>
        <nav className="lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/"
            >Ya tienes una cuenta? Inicia Session
          </Link>
          <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/olvide-password"
            >Olvide mi Password
          </Link>
        </nav>

    </>
  )
}

export default Registrar
