import React, { useState, useEffect } from "react";
import "./Notas.css";

const Notas = () => {
    const [nota, setNota] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [timeoutId, setTimeoutId] = useState(null);

    const handleChange = (e) => {
        setNota(e.target.value);
        setMensaje("Escribiendo...");
        
        // si hay un temporizador activo, lo limpiamos para reiniciar el conteo
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // establecemos un nuevo temporizador de 2 segundos
        const newTimeoutId = setTimeout(() => {
            guardarNota();
        }, 2000);
        setTimeoutId(newTimeoutId);
    };

    const guardarNota = () => {
        setMensaje("Nota guardada automáticamente.");
        // aca podrías guardar la nota en localStorage o una base de datos
        console.log("Nota guardada:", nota);
    };

    useEffect(() => {
        // cargar la nota desde localStorage o un estado inicial
        const savedNote = localStorage.getItem("nota");
        if (savedNote) {
            setNota(savedNote);
        }
    }, []);

    useEffect(() => {
        // guardar la nota en localStorage cada vez que cambie
        if (nota) {
            localStorage.setItem("nota", nota);
        }
    }, [nota]);

    return (
        <div className="notas-contenedor">
            <h1>Aplicación de Notas</h1>
            <textarea
                value={nota}
                onChange={handleChange}
                placeholder="Escriba su nota aquí..."
            />
            <p className="mensaje">{mensaje}</p>
        </div>
    );
};

export default Notas;
