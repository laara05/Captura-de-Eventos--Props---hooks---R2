import React, { useState, useEffect } from "react";
import "./Galeria.css"; 

const Galeria = () => {
    const [indiceActual, setIndiceActual] = useState(0);

    const imagenes = [
       "https://cosmiquestudio.com/product_images/uploaded_images/a-fashion-guide-cute-aesthetic-outfit-ideas-1.jpg?text=Imagen+1"
        "https://cdn.mos.cms.futurecdn.net/whowhatwear/posts/299950/aesthetic-outfits-299950-1653326868164-square.jpg?text=Imagen+2"
        "https://cosmiquestudio.com/product_images/uploaded_images/a-fashion-guide-cute-aesthetic-outfit-ideas-5.jpg?text=Imagen+3"
        "https://cdn11.bigcommerce.com/s-c7qlm8a06j/images/stencil/532x532/products/2853/28805/soft-vintage-unisex-sweater_20__72932.1667215932.jpg?c=1?text=Imagen+4"
    ];

    const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") {
            setIndiceActual((indiceActual + 1) % imagenes.length);
        } else if (e.key === "ArrowLeft") {
            setIndiceActual((indiceActual - 1 + imagenes.length) % imagenes.length);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [indiceActual]);

    return (
        <div className="galeria">
            <img src={imagenes[indiceActual]} alt={`Imagen ${indiceActual + 1}`} />
        </div>
    );
};

export default Galeria;
