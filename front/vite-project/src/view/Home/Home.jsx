// Página principal del consultorio
import styles from "./Home.module.css";
import medicalImage1 from "../imagenes/7869d1_268f38d3905e496587cb7de41a74ad11~mv2.jpg.webp"
import medicalImage2 from "../imagenes/vigilancia-medica-ocupacional.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/agendarCita"); // Ruta para el formulario de agendar turnos
  };

  return (
    <div className={styles["home-container"]}>
      <header className={styles["header"]}>
        <h1>Bienvenido al Consultorio Médico</h1>
        <p>Cuidamos de tu salud con profesionalismo y dedicación.</p>
      </header>

      <section className={styles["images-section"]}>
        <img src= {medicalImage1} alt="Imagen médica 1" className={styles["image"]} />
        <img src={medicalImage2} alt="Imagen médica 2" className={styles["image"]} />
      </section>

      <section className={styles["services-section"]}>
        <h2>Exámenes y Procedimientos Médicos</h2>
        <ul className={styles["services-list"]}>
          <li>
            <h3>Radiografía</h3>
            <p>
              La radiografía es un estudio de imágenes que utiliza rayos X para
              obtener imágenes del interior del cuerpo. Se usa comúnmente para
              diagnosticar fracturas óseas, problemas pulmonares y otras
              condiciones.
            </p>
          </li>
          <li>
            <h3>Toma de Tensión Arterial y Signos Vitales</h3>
            <p>
              Este procedimiento mide la presión arterial, la frecuencia
              cardíaca, la temperatura corporal y la frecuencia respiratoria.
              Es esencial para evaluar el estado general de salud del paciente.
            </p>
          </li>
          <li>
            <h3>Auscultación Médica</h3>
            <p>
              Consiste en escuchar los sonidos del cuerpo, como los latidos del
              corazón y la respiración, utilizando un estetoscopio. Es útil para
              detectar anomalías cardíacas o respiratorias.
            </p>
          </li>
          <li>
            <h3>Toma de Análisis de Sangre (Hemograma)</h3>
            <p>
              El hemograma es un examen que analiza diferentes componentes de la
              sangre, como glóbulos rojos, glóbulos blancos y plaquetas. Se
              utiliza para diagnosticar infecciones, anemia y otros trastornos.
            </p>
          </li>
        </ul>
      </section>

      <section className={styles["appointment-section"]}>
        <h2>Agendar Turnos</h2>
        <p>Haz clic en el botón para agendar tu turno de forma rápida y sencilla.</p>
        <button className={styles["appointment-button"]} onClick={handleAppointmentClick}>
          Agendar Turno
        </button>
      </section>
    </div>
  );
};

export default Home;
