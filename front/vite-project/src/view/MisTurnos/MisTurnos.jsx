import { useContext, useEffect } from "react"
// import myAppointments from "../../helpers/myAppointments"
import Styles from "./MisTurnos.module.css"
import Turno from "../../components/Turno/Turno"
import { UsersContext } from "../../context/UsersContex"

function MisTurnos (){
    const {userAppointments, getUserAppointments , user} = useContext(UsersContext)

    useEffect(()=>{
        getUserAppointments(user)
    },[user, getUserAppointments])


return(
    <div className={Styles.contenedor}>
    <div className={Styles.contenedorH1}>
        <h1>Mis turnos</h1>
        <div className= {Styles.conteinerTurns}>
            {userAppointments.length > 0 ? userAppointments.map((turno,indice) =>{
                return(
                    <Turno
                    key={turno.id}
                    id={turno.id}
                    showId = {indice +1}
                    date={turno.date}
                    time={turno.time}
                    status={turno.status}
                    />
                )
            }) : <h1>No hay turnos disponibles</h1>}
        </div>
        </div>
        </div>   

        ) 
}
export default MisTurnos