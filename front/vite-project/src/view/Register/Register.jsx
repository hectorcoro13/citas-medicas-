import { RegisterFormValidates } from "../../helpers/Validates"
import Styles from "./Reguster.module.css"
import { useFormik } from "formik"
// import axios from "axios"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { UsersContext } from "../../context/UsersContex"
import { useContext } from "react"

const Register = () => {

    const { registerUser} = useContext(UsersContext);
    
    

   const formik = useFormik({
    initialValues: {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
    },
        validate: RegisterFormValidates,
        initialErrors: {
            name: "Name is required",
            email: "email is required",
            birthdate: "Birthdate is required",
            nDni: "Dni is required",
            username: "Username is required",
            password: "Password is required",
        },
        onSubmit: (values) => {
           
            registerUser(values)

            .then((res)=>{
                if(res.status === 201){
                 Swal.fire({
                    title: "Registro exitoso",
                    text: "Gracias por registrarte",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                })
                formik.resetForm()
                }
            })
            .catch((err)=>{
                if(err.response.data.data.includes("email")){
                    Swal.fire({
                        title: `Ya existe un usuario con el email ${formik.values.email}`,
                        text: "intentelo con otro email",
                        icon: "error",
                    })

                }else if(err.response.data.data.includes("username")){
                        Swal.fire({
                            title: `Ya existe un usuario con el username${formik.values.username}`,
                            text: "intentelo con otro username",
                            icon: "error",
                            confirmButtonText: "Aceptar",
                        })

                        }else if(err.response.data.data.includes("nDni")){
                            Swal.fire({
                                title: "El DNI no es valido",
                                text: "intentelo con otro DNI",
                                icon: "error",
                                confirmButtonText: "Aceptar",
                            })
                        }
            })
        }

    })


    return (
     <form className={Styles.formContainer}onSubmit={formik.handleSubmit}>
         <h2 className={Styles.formTittle}>Formulario de Registro</h2>
         <div className={Styles.formGroup}>
             <label className={Styles.formLabel}>Nombre:</label>
             <input 
             className={Styles.formInput}
             type="text"
             name="name"
             placeholder="Ingrese su nombre"
             onChange={formik.handleChange}
             value={formik.values.name}
             />
             <label className={Styles.errorLabel}>{formik.errors.name? formik.errors.name : ""}</label>
         </div>


         <div className={Styles.formGroup}>
             <label className={Styles.formLabel}>Email:</label>
             <input 
             className={Styles.formInput}
             type="text"
             name="email"
             placeholder="mail@ejemplo.com"
             onChange={formik.handleChange}
             value={formik.values.email}
             />
             {formik.errors.email && formik.errors.email?(
             <label className={Styles.errorLabel}>{formik.errors.email}</label>
             ):null}

    
         </div>


         <div className={Styles.formGroup}>
             <label className={Styles.formLabel}>Fecha de nacimiento:</label>
             <input 
             className={Styles.formInput}
             type="date"
             name="birthdate"
             placeholder="Ingrese fecha de nacimiento"
             onChange={formik.handleChange}
             value={formik.values.birthdate}
             />
            {formik.errors.birthdate && formik.errors.birthdate?(
             <label className={Styles.errorLabel}>{formik.errors.birthdate}</label>
             ):null}
         </div>



         <div className={Styles.formGroup}>
             <label className={Styles.formLabel}>nDni:</label>
             <input 
             className={Styles.formInput}
             type="number"
             name="nDni"
             placeholder="Ingrese Dni"
             onChange={formik.handleChange}
             value={formik.values.nDni}
             />
            {formik.errors.nDni && formik.errors.nDni?(
             <label className={Styles.errorLabel}>{formik.errors.nDni}</label>
             ):null}
         </div>

         <div className={Styles.formGroup}>
             <label className={Styles.formLabel}>Username:</label>
             <input 
             className={Styles.formInput}
             type="text"
             name="username"
             placeholder="Tu nombre de usuario"
             onChange={formik.handleChange}
             value={formik.values.username}
             />
            {formik.errors.username && formik.errors.username?( 
             <label className={Styles.errorLabel}>{formik.errors.username}</label>
             ):null}
         </div>



         <div className={Styles.formGroup}>
             <label className={Styles.formLabel}>password:</label>
             <input 
             className={Styles.formInput}
             type="password"
             name="password"
             placeholder="*****"
             onChange={formik.handleChange}
             value={formik.values.password}
             />
            {formik.errors.password && formik.errors.password?( 
             <label className={Styles.errorLabel}>{formik.errors.password}</label>
             ):null}
         </div>

         <button className={Styles.formButton} type="submit" disabled= {formik.errors.name || formik.errors.email || formik.errors.birthdate || formik.errors.nDni || formik.errors.username || formik.errors.password}>
            Submit
         </button>
         <br/>
            <label>
                Ya tienes una cuenta? <Link to="/login" className={Styles.Register} >Login</Link>
            </label>

     </form>
    )
  };
  
  export default Register;