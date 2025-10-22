import Styles from "./Login.module.css";
import { useFormik } from "formik";
// import axios from "axios";
import Swal from "sweetalert2";
import { loginFormValidates } from "../../helpers/Validates";
import { Link, useNavigate, } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContex";



function Login() {

     const { loginUser } = useContext(UsersContext)

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        initialErrors: {
            username: "Username is required",
            password: "Password is required",
        },

        validate: loginFormValidates,
        onSubmit: (values) => {
            loginUser(values)
                .then((res) => {
                    if (res.status === 200) 
                        Swal.fire({
                            title: "Login exitoso",
                            text: "Bienvenido",
                            icon: "success",
                            confirmButtonText: "Aceptar",
                        });
                   navigate("/")
                    })

                .catch((err) => {
                        if (err.response.status === 400) {
                            Swal.fire({
                                title: `Error: ${err.response.data.data}`,
                                text: "Intentelo de nuevo",
                                icon: "error",
                                confirmButtonText: "Aceptar",
                            });
                        }else if (err.response.data.mesagge)
                            Swal.fire({
                                title: `Error: ${err.response.data.mesagge}`,
                                text: "Intentelo de nuevo ",
                                icon: "error",
                                confirmButtonText: "Aceptar",
                            });
                        
                });
        },
    });

    return (
        <form className={Styles.formContainer} onSubmit={formik.handleSubmit}>
            <h2 className={Styles.formTitle}>Formulario de Login</h2>
            <div className={Styles.formGroup}>
                <label className={Styles.formLabel}>Username:</label>
                <input
                    className={Styles.formInput}
                    type="text"
                    name="username"
                    placeholder="Ingrese su nombre de usuario"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                {formik.errors.username && <label className={Styles.errorLabel}>{formik.errors.username}</label>}
            </div>

            <div className={Styles.formGroup}>
                <label className={Styles.formLabel}>Password:</label>
                <input
                    className={Styles.formInput}
                    type="password"
                    name="password"
                    placeholder="*****"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && <label className={Styles.errorLabel}>{formik.errors.password}</label>}
            </div>

            <button className={Styles.formButton} type="submit" disabled={formik.errors.password|| formik.errors.username}>
                Login
            </button>
            <br/>
            <p className={Styles.Registro}>
  Aun no tienes cuenta? <Link to="/register" className={Styles.Register}>Regístrate</Link>
</p>
        </form>
    );
}

export default Login;
