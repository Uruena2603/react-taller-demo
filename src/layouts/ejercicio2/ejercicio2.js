import React, { useState } from "react";

const Ejercicio2 =( ) =>{
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);  
    
    const encontrarMayor = () => {
        const mayor = Math.max(num1, num2, num3);
        alert(`El número mayor es ${mayor}`);
    };

    const encontrarMenor = () => {
        const menor = Math.min(num1, num2, num3);
        alert(`El número menor es ${menor}`);
    };

    const encontrarNegativos = () => {
        const negativos = [];
    
        if (num1 < 0) {
            negativos.push(num1);
        }
        if (num2 < 0) {
        negativos.push(num2);
        }
        if (num3 < 0) {
        negativos.push(num3);
        }
        if (negativos.length === 0) {
        alert("No hay números negativos");
        } else {
        alert(`Los números negativos son: ${negativos.join(", ")}`);
        }
    };
    
        return(
            <>
                <div>
                    <div><h1>Ejercicio 2</h1></div>
                    <div>
                        <label>Número 1:</label>
                        <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
                        <br />
                        <label>Número 2:</label>
                        <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
                        <br />
                        <label>Número 3:</label>
                        <input type="number" value={num3} onChange={(e) => setNum3(parseInt(e.target.value))} />
                        <br />
                        <button onClick={encontrarMayor}>Encontrar el número mayor</button>
                        <button onClick={encontrarMenor}>Encontrar el número menor</button>
                        <button onClick={encontrarNegativos}>Encontrar números negativos</button>
                    </div>
                </div>
            </>
        );
    }
    
export default Ejercicio2;