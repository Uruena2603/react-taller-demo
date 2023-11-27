import {useState} from "react"

export const useContador = (initialState,numToSum, numToRes) => {

    const [valor, setValor] = useState(initialState)

        const modificarEstado = (num) => {
            setValor(Math.max(valor+num, 0)) 
        }

        const increaseBy = () => {
            setValor(valor+numToSum)
        }

        const dicreaseBy = () => {
            setValor(Math.max (valor-numToRes,0)) 
        }

        const reset = () =>{
            setValor(initialState)
        }

        return{
            valor,
            modificarEstado,
            increaseBy,
            dicreaseBy,
            reset
        }

}
