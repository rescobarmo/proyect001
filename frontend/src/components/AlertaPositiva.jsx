

const AlertaPositiva = ({alertaPositiva}) => {
  return (
    <div className={`${alertaPositiva.error ?'from-red-400 to-red-600'  : 'from-sky-400 to to-sky-600' } 
        bg-gradient-to-br    text-center p-3 rounded-xl uppercase text-white font-bold text-sl my-5`
        }>
        {alertaPositiva.msg}
    </div>
  )
}

export default AlertaPositiva
