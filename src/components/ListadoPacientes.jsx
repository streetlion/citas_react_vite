import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? 
        <>
          <h2 className="font-black text-center text-3xl">Listado de Pacientes</h2>
          <p className="text-center text-xl mt-5 mb-10">
            Administra tus {''}
            <span className="text-indigo-600">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente)=>(
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
       :
        <>
          <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
          <p className="text-center text-xl mt-5 mb-10">
            Comienza agregando pacientes y {''}
            <span className="text-indigo-600">aparecerán en este lugar</span>
          </p>
        </>}

             

    </div>
  )
}

export default ListadoPacientes