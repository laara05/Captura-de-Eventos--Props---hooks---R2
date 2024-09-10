import React, { useState } from "react";
import "./Formulario.css";

const Formulario = () => {
    const [formulario, setFormulario] = useState({
        nombre: "",
        correo: "",
        contrasena: ""
    });

    const [errores, setErrores] = useState({});

    const validarCampos = (nombre, valor) => {
        let erroresTemp = { ...errores };

        // validar el nombre
        if (nombre === "nombre") {
            if (valor.trim() === "") {
                erroresTemp.nombre = "El nombre es obligatorio.";
            } else if (valor.length < 3) {
                erroresTemp.nombre = "El nombre tiene que tener al menos 3 caracteres";
            } else {
                delete erroresTemp.nombre;
            }
        }

        // validar el correo electrónico
        if (nombre === "correo") {
            const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexCorreo.test(valor)) {
                erroresTemp.correo = "El correo no es válido";
            } else {
                delete erroresTemp.correo;
            }
        }

        // validar la contraseña
        if (nombre === "contrasena") {
            if (valor.length < 6) {
                erroresTemp.contrasena = "La contraseña tiene que tener al menos 6 caracteres";
            } else {
                delete erroresTemp.contrasena;
            }
        }

        setErrores(erroresTemp);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
        validarCampos(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errores).length === 0 && formulario.nombre && formulario.correo && formulario.contrasena) {
            alert("Formulario enviado con éxito!");
        } else {
            alert("Por favor, completa el formulario correctamente");
        }
    };

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                    placeholder="Escriba su nombre"
                />
                {errores.nombre && <p className="error">{errores.nombre}</p>}
            </div>

            <div>
                <label>Correo electrónico:</label>
                <input
                    type="email"
                    name="correo"
                    value={formulario.correo}
                    onChange={handleChange}
                    placeholder="Escriba su correo"
                />
                {errores.correo && <p className="error">{errores.correo}</p>}
            </div>

            <div>
                <label>Contraseña:</label>
                <input
                    type="password"
                    name="contrasena"
                    value={formulario.contrasena}
                    onChange={handleChange}
                    placeholder="Escriba su contraseña"
                />
                {errores.contrasena && <p className="error">{errores.contrasena}</p>}
            </div>

            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
