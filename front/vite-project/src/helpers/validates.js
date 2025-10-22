export const RegisterFormValidates = (input) => {
    const errors = {}
    if (!input.name || !input.name.trim()) {
        errors.name = "Nombre es requerido";
    } else if (!/^[A-Za-z\s]+$/.test(input.name)) {
        errors.name = "Nombre no valido";
    }
    
    if (!input.email || !input.email.trim()) {
        errors.email = "Email es requerido";
    } else if (!/^\S+@\S+\.\S+$/.test(input.email)) {
        errors.email = "Email no valido";
    }


    if (!input.birthdate || !input.birthdate.trim()) {
        errors.birthdate = "Fecha de nacimiento es requerida";
    } else {
        const date = new Date();
        const birthdate = new Date(input.birthdate);
        const year = date.getFullYear() - birthdate.getFullYear();

        if (year < 18) {
            errors.birthdate = "Debes ser mayor de edad";
        }
    }

   // Validación del DNI
   if (!String(input.nDni).trim()) errors.nDni = "DNI es requerido";
    else if (!/^\d+$/.test(input.nDni)) errors.nDni = "DNI no válido";
    else if (String(input.nDni).length < 7 || String(input.nDni).length > 8) errors.nDni = "El DNI debe tener entre 7 y 8 dígitos";

    if (!input.username || !input.username.trim()) {
        errors.username = "Username es requerido";
    } else if (!/^[a-zA-Z0-9]+$/.test(input.Username)) {
        errors.username = "El nombre de usuario solo debe contener letras y numeros";
    }


    if (!input.password || !input.password.trim()) {
        errors.password = "password es requerido";
    } else if (input.password.length < 8) {
        errors.password = "La password debe tener al menos 8 caracteres";
    } else if (!/[A-Z]/.test(input.password)) {
        errors.password = "Password debe contener al menos una mayuscula";
    } else if (!/[a-z]/.test(input.password)) {
        errors.password = "Password debe contener al menos una minuscula";
    } else if (!/[0-9]/.test(input.password)) {
        errors.password = "Password debe contener al menos un numero";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(input.password)) {
        errors.password = "Password debe contener al menos un caracter especial";
    }


    return errors
    
};

export const loginFormValidates = (input) => {
    const errors = {};
    if (!input.username.trim()) {
        errors.username = "Username es requerido";
    } else if (!/^[a-zA-Z0-9]+$/.test(input.Username)) {
        errors.username = "El nombre de usuario solo debe contener letras y numeros";
    }

if (!input.password.trim()) {
        errors.password = "password es requerido";
    } else if (input.password.length < 8) {
        errors.password = "La password debe tener al menos 8 caracteres";
    } else if (!/[A-Z]/.test(input.password)) {
        errors.password = "Password debe contener al menos una mayuscula";
    } else if (!/[a-z]/.test(input.password)) {
        errors.password = "Password debe contener al menos una minuscula";
    } else if (!/[0-9]/.test(input.password)) {
        errors.password = "Password debe contener al menos un numero";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(input.password)) {
        errors.password = "Password debe contener al menos un caracter especial";
    }


    return errors
    
};

const isValidTime = (time) => {
    const [hour,minutes] = time.split(":").map(Number)
    const Totalminutes = hour * 60 + minutes
    const startTime =  8*60
    const endTime =  18*60

     return Totalminutes >= startTime && Totalminutes < endTime

}

export const dateTimeValidates = (input) => {

    const errors = {}
    const {date, time} = input
    const selectedDateTime = new Date (`${date}T${time}`)
    const now  = new Date()
    const twentyFourHoursLater = new Date(now.getTime() + 24 * 60 * 60 * 1000)

    if (!date)  errors.date = "La fecha es obligatoria";
    else if (selectedDateTime < now) errors.date = "La fecha no puede ser anterior a la actual";
    else if (selectedDateTime < twentyFourHoursLater) errors.date = "Debes seleccionar la fehca con 24 horas de antelación";
    else if (selectedDateTime.getDay() === 0 || selectedDateTime.getDay() === 6) errors.date = "No se pueden agendar citas los fines de semana";

     if (!time) errors.time = "La hora es obligatoria";
     else if (!isValidTime(time)) errors.time = "La hora debe estar entre las 8:00 am y 6:00 pm";

    return errors

}


