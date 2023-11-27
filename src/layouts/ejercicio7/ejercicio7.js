import React, { useState } from 'react';

function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operacion, setOperacion] = useState('');
    const [resultado, setResultado] = useState('');

    const calcular = () => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    switch (operacion) {
        case '+':
            setResultado(numero1 + numero2);
        break;
        case '-':
            setResultado(numero1 - numero2);
        break;
        case '*':
            setResultado(numero1 * numero2);
        break;
        case '/':
            if (numero2 === 0) {
                setResultado('No se puede dividir entre cero');
            } else {
                setResultado(numero1 / numero2);
            }
        break;
        case '^':
                setResultado(Math.pow(numero1, numero2));
        break;
        case '√':
        if (numero2 < 0) {
                setResultado('No se puede calcular la raíz cuadrada de un número negativo');
        } else {
                setResultado(Math.sqrt(numero2));
        }
        break;
        case 'log':
        if (numero1 <= 0 || numero2 <= 0) {
                setResultado('No se puede calcular el logaritmo de un número negativo o cero');
        } else {
                setResultado(Math.log(numero2) / Math.log(numero1));
        }
        break;
        default:
        setResultado('Por favor, seleccione una operación');
    }
    }

    return (
    <div>
        <h1>Calculadora Cientifica</h1>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
        <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
        <option value="">Seleccione una operación</option>
        <option value="+">Suma</option>
        <option value="-">Resta</option>
        <option value="*">Multiplicación</option>
        <option value="/">División</option>
        <option value="^">Potenciación</option>
        <option value="√">Radical</option>
        <option value="log">Logaritmo</option>
        </select>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
        <button onClick={calcular}>Calcular</button>
        <h2>Resultado= {resultado}</h2>
    </div>
    );
}

export default App;