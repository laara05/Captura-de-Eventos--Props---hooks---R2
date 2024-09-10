import React from "react";
import "./Botones.css";

const Botones = () => {
    const handleClick = (mensaje) => {
        alert(`Hiciste clic en: ${mensaje}`);
    };

    const handleDoubleClick = (mensaje) => {
        alert(`Hiciste doble clic en: ${mensaje}`);
    };

    return (
        <div className="botones-contenedor">
            <button
                onClick={() => handleClick("Botón 1")}
                onDoubleClick={() => handleDoubleClick("Botón 1")}
            >
                Botón 1
            </button>

            <button
                onClick={() => handleClick("Botón 2")}
                onDoubleClick={() => handleDoubleClick("Botón 2")}
            >
                Botón 2
            </button>

            <button
                onClick={() => handleClick("Botón 3")}
                onDoubleClick={() => handleDoubleClick("Botón 3")}
            >
                Botón 3
            </button>

            <button
                onClick={() => handleClick("Botón 4")}
                onDoubleClick={() => handleDoubleClick("Botón 3")}
            >
                Botón 4
            </button>

            <button
                onClick={() => handleClick("Botón 5")}
                onDoubleClick={() => handleDoubleClick("Botón 3")}
            >
                Botón 5
            </button>

            <button
                onClick={() => handleClick("Botón 6")}
                onDoubleClick={() => handleDoubleClick("Botón 3")}
            >
                Botón 6
            </button>
        </div>
    );
};

export default Botones;
