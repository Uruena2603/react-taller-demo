import {Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider'
import "./menu.css"

const Menu=( ) =>{
    return(
        <>
            <Grid container spacing={3} justifyContent="center" className="css">
                <Grid item>
                    <Button variant="contained">
                        <Link to={"/ejercicio1"} className="l1">Ejercicio 1</Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        <Link to={"/ejercicio2"} className="l1">Ejercicio 2</Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        <Link to={"/Ejercicio3"} className="l1">Ejercicio 3</Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        <Link to={"/ejercicio4"} className="l1">Ejercicio 4</Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        <Link to={"/Ejercicio5"} className="l1">Ejercicio 5</Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        <Link to={"/ejercicio6"} className="l1">Ejercicio 6</Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        <Link to={"/ejercicio7"} className="l1">Ejercicio 7</Link>
                    </Button>
                </Grid>
                <Grid item >
                    <Button variant="contained">
                        <Link to={"/ejercicio8"} className="l1">Ejercicio 8</Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        <Link to={"/ejercicio9"} className="l1">Ejercicio 9</Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        <Link to={"/Ejercicio10"} className="l1">Ejercicio 10</Link>
                    </Button>
                </Grid>
                <Outlet/>
            </Grid>
            <Divider/>
        </>
    );
}

export default Menu;