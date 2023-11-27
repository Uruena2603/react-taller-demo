import {useContador} from "../../hooks/useContador"

//useState
//REFACTOR

const FirstPage = () => {

    const {valor, modificarEstado, increaseBy, dicreaseBy, reset} = useContador(0,1,1)
    return (
        <>
        <h1>Contador</h1>
        <hr/>
        <h1>{valor}</h1>
        <button onClick={increaseBy}> Incrementar </button> <br />
        <button onClick={dicreaseBy}> Decrementar </button> <br />
        <button onClick={reset}> Reset </button> <br />
        </>
    )
};

export default FirstPage;