
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {Formik, Form, Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Alerta from '../components/Alert'
import clienteAxios from '../../config/clienteAxios'
import AlertaPositiva from '../components/AlertaPositiva'
import useAuth from '../hooks/useAuth'




const Login = () => {
  const [ alertaPositiva, setAlertaPositiva] = useState({})
  const {setAuth} = useAuth(); 


  const nuevaCuentaSchema = Yup.object().shape({
    email: Yup.string()
              .min(3,'El Email de muy corto')
              .required('Ingrese Email')
              .email('Email no valido'),
    password :Yup.string()
              .min(4,'La PassWord minimo caracteres son 4')
              .max(8,'La PassWord maxino caracteres son 8')
              .required('Ingrese PassWord')
  })

  const handleSubmit = async (valores) => {
    const email = valores.email;
    const password = valores.password;
    
      try {
        const { data }  = await clienteAxios.post('/Usuarios/login', 
                                            { 
                                              email,
                                              password
                                            }); 
        setAlertaPositiva({})
        localStorage.setItem('token', data.token)
        setAuth(data)
        

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
        <h1 className="text-sky-600 font-black text-6xl capitalize">Inicia sesion y administra tus  
          <span className="text-slate-700"> proyectos</span>
        
        </h1>
       

        { msg && <AlertaPositiva alertaPositiva= {alertaPositiva} />}
 
      <Formik
          initialValues={{
          email:'',
          password :'',
        }} 
        onSubmit = {(values) => {

          handleSubmit(values)
         
        }          
        }
        validationSchema={nuevaCuentaSchema}
      >

        {({errors, touched}) => {
            //console.log(touched)
       

          return(
        <Form className="my-10 bg-white shadow rounded-lg px-10 py-10">
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="emai1l"
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
          <Field
            type="submit"
            value="Iniciar Sesion"
            className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />
        </Form>
        )}}
      </Formik>
        <nav className="lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/registrar"
            >No tienens una cuenta Registrate
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

export default Login