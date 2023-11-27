import { Button } from "@mui/material";
import "./eje8.css";

const Ejercicio8 =( ) =>{
    const abrir=()=>{
        window.open(window.URL);
    }
    return(
        <>
            <div className="x"><h1>Ejercicio 8</h1></div>
            <div className="x">
                <Button variant="contained" onClick={abrir}>Abrir una nueva ventana</Button>
            </div>
        </>
    );
}

export default Ejercicio8;