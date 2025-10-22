import { Link } from "react-router-dom";
import styles from "./NotFound.module.css"

function NotFound() {
  return (
    <div className={styles["border"]}>
      <h1 className={styles["text"]}>404 - Página no encontrada</h1>
      <p className="texto1">La página que estás buscando no existe.</p>
      <Link to="/" className={styles.Link}>Volver a la página de inicio</Link>
    </div>
  );
}

export default NotFound;
