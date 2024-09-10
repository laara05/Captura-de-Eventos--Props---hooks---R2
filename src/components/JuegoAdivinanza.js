import React, { useState } from "react";
import "./JuegoAdivinanza.css";

const JuegoAdivinanza = () => {
    const [numeroAleatorio, setNumeroAleatorio] = useState(Math.floor(Math.random() * 100) + 1);
    const [intento, setIntento] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [intentosRestantes, setIntentosRestantes] = useState(10);

    const handleChange = (e) => {
        setIntento(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const numeroIngresado = parseInt(intento, 10);

        if (isNaN(numeroIngresado)) {
            setMensaje("Por favor, introduzca un número válido");
            return;
        }

        if (numeroIngresado === numeroAleatorio) {
            setMensaje("Felicidades!! Adivinaste el número");
        } else if (numeroIngresado < numeroAleatorio) {
            setMensaje("El número es más alto");
        } else {
            setMensaje("El número es más bajo");
        }

        setIntentosRestantes(intentosRestantes - 1);

        if (intentosRestantes - 1 === 0) {
            setMensaje(`Te has quedado sin intentos. El número era ${numeroAleatorio}.`);
            setNumeroAleatorio(Math.floor(Math.random() * 100) + 1);
            setIntentosRestantes(10);  // reiniciar el juego
        }

        setIntento("");
    };

    return (
        <div className="juego-adivinanza">
            <h1>Juego de Adivinanza</h1>
            <p>Adivina un número entre 1 y 100</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={intento}
                    onChange={handleChange}
                    placeholder="Introduzca un número"
                />
                <button type="submit">Adivinar</button>
            </form>
            {mensaje && <p className="mensaje">{mensaje}</p>}
            <p>Intentos restantes: {intentosRestantes}</p>
        </div>
    );
};

export default JuegoAdivinanza;
