import { useState } from "react";

export function Ejercicio5(){
    const[palabra, setPalabra]=useState("");
    const[palindromo, setPalindromo]=useState("");

    const esPalindromo=(p)=>{
        return p.toLowerCase()===p.split("").reverse().join("").toLowerCase();
    };

    const handleChange=(e)=>{
       setPalabra(e.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(esPalindromo(palabra)){
            setPalindromo(`La palabra ${palabra} es palindroma`);
        }else{
            setPalindromo(`La palabra ${palabra} no es palindroma`);
        }
    };
    return(
        <div>
            <h1>Ejercicio 5</h1>
            <h2>Palindromos</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={palabra} onChange={handleChange} required="required" placeholder='Ingrese una palabra'/>
                <button type="submit">Calcular</button>
            </form>
            <p>{palindromo}</p>
            <hr/>
            <br/>
        </div>
        
    );

}


