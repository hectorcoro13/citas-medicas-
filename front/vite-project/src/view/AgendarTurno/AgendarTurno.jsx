import { useFormik } from "formik";
import styles from "./AgendarTurno.module.css"; 
import { dateTimeValidates } from "../../helpers/validates";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContex";
import Swal from "sweetalert2";

const AgendarCita = () => {
  const today = new Date().toISOString().split("T")[0]; // Fecha actual en formato yyyy-mm-dd





   const {createdAppointment, user}= useContext(UsersContext)
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
    },
    initialErrors:{
      date: "La fecha es requerida",
      time: "La hora es requerida"
    },
    validate: dateTimeValidates,
    onSubmit : async (values) => {
      const valuesObject = {
        ...values,
        userId : user
      }
      try {
       await createdAppointment (valuesObject)
       Swal.fire({
        title: "Cita agendada con exito",
        icon: "success",
      });
      } catch (error) {
        console.log(error);
        
      
        Swal.fire ({
          icon: "error",
          title: `${error.response.data.data}`,
          text: "Intentelo de nuevo",
        })
      } finally {
        formik.resetForm()
      }
    }
    })
  
  return (
    <div className={styles["form-container"]}>
      <h1>Agendar Cita Médica</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            name="date"
            min={today} // Bloquea fechas pasadas desde el selector
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date && formik.errors.date && (
            <div className={styles["error"]}>{formik.errors.date}</div>
          )}
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="time">Hora:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.time && formik.errors.time && (
            <div className={styles["error"]}>{formik.errors.time}</div>
          )}
        </div>

        <button
          type="submit"
          className={styles["submit-btn"]}
          disabled={!(formik.isValid && formik.dirty)} 
        >
          Agendar Cita
        </button>
      </form>
    </div>
  );
};

export default AgendarCita;
