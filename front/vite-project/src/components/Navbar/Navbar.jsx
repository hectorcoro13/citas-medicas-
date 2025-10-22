import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.modules.css";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContex";

function Navbar() {
    const navigate = useNavigate();
    const { logOut } = useContext(UsersContext);

    const handleLogout = () => {
        logOut();
        Swal.fire({
            icon: "warning",
            title: "Tu sesión se cerró",
            confirmButtonText: "Aceptar",
        });
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/misturnos" className="navbar-link">Mis turnos</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/agendarCita" className="navbar-link">Agendar Cita</Link>
                </li>
            </ul>
            <button onClick={handleLogout} className="navbar-button">Cerrar Sesión</button>
        </nav>
    );
}

export default Navbar;
