import React, {useState} from 'react';

export function Ejercicio3(){
    const[numero, setNumero]=useState("");
    const[factorial, setFactorial]=useState("");

    const calcularFactorial=(n)=>{
        if(n===0||n===1) return 1;
        else return n*calcularFactorial(n-1);
    };

    const handleChange=(e)=>{
        setNumero(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        const n=parseInt(numero);
        if(n>=0){
            const f=calcularFactorial(n);
            setFactorial(`El factorial de ${n} es: ${f}`);
        }else{
            setFactorial('Ingrese un valor válido');
        }

    };
    
    return(
        <div>
            <h1>Ejercicio3</h1>
            <h2>Factorial</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                     value={numero} 
                     onChange={handleChange} 
                     required="required" 
                     placeholder='Ingrese un número'
                />
                <button type="submit">Calcular</button>
            </form>
            <p>{factorial}</p>
            <hr/>
            <br/>
        </div>
    
    );

}

