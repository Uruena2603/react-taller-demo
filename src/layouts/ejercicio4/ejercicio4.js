import React, { useState } from "react";

const Ejercicio4 =( ) =>{
        const [cadena, setCadena] = useState("");
        const todasMayusculasOMinusculas = () => {
            if (cadena === cadena.toUpperCase()) {
            alert("Todas las letras son mayúsculas");
            } else if (cadena === cadena.toLowerCase()) {
            alert("Todas las letras son minúsculas");
            }
        };
        
        return(
            <>
                    <div>
                        <div><h1>Ejercicio 4</h1></div>
                        <div>
                        <label>Introduce una cadena de texto:</label>
                        <input type="text" value={cadena} onChange={(e) => setCadena(e.target.value)} />
                        <button onClick={todasMayusculasOMinusculas}>Comprobar</button>
                        </div>
                    </div>
            </>
            
        );
}

export default Ejercicio4;