/* eslint-disable react/prop-types */
import { useContext } from "react"
import Styles from "./Turno.module.css"
import { UsersContext } from "../../context/UsersContex"
import Swal from "sweetalert2"
function Turno ({id,date, time,status,showId}){ 

    const {cancelUserAppointment}= useContext(UsersContext)
    const handleCancel = async() =>{
        try {
            await cancelUserAppointment(id)
            Swal.fire({
                icon: "warning",
                color: "red",
                title: "Cita cancelada con exito",

            })
        } catch (error) {
        console.log(error);
           Swal.fire({
            icon: "error",
            title: "Error al cancelar la cita intentenlo nuevamente",
           })
        }
        
    }

    return(
        <div className={Styles.appointmentCard}>
        <div className={Styles.appointmentHeader}>
            <h3>Turno#{showId}</h3>
            <span className={status === 'Active' ? Styles.statusActive : Styles.statusInactive}>{status}</span>
            </div>
            <div className={Styles.appointmentDetails}>
                <p><strong>Fecha:</strong><span>{date}</span></p>
                <p><strong>Hora:</strong><span>{time}</span></p>
                </div>
                <button className={`${Styles.cancelButton} ${status === "cancelled" ? Styles.disabledButton : ""}`}
                onClick={handleCancel}
                disabled={status === "cancelled"}
                >
                    Cancelar Turno
                    </button>
                    </div>
   )
}

export default Turno