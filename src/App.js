import './App.css';
import Menu from './layouts/Menu/menu';
import { Routes, Route} from "react-router-dom";
import FirstPage from './layouts/ejercicio1/FirstPage';
import Ejercicio2 from './layouts/ejercicio2/ejercicio2';
import { Ejercicio3 } from './layouts/Ejercicio3/Ejercicio3';
import Ejercicio4 from './layouts/ejercicio4/ejercicio4';
import { Ejercicio5 } from './layouts/Ejercicio5/Ejercicio5';
import Ejercicio6 from './layouts/ejercicio6/ejercicio6';
import Ejercicio7 from './layouts/ejercicio7/ejercicio7';
import Ejercicio8 from './layouts/ejercicio8/ejercicio8';
import Ejercicio9 from './layouts/ejercicio9/ejercicio9';
import { Ejercicio10 } from './layouts/Ejercicio10/Ejercicio10';

function App() {
  return (
    <>
      <Menu/>
        <Routes>
          <Route path='ejercicio1' element={<FirstPage/>}/>
          <Route path='ejercicio2' element={<Ejercicio2/>}/>
          <Route path='Ejercicio3' element={<Ejercicio3/>}/>
          <Route path='ejercicio4' element={<Ejercicio4/>}/>
          <Route path='Ejercicio5' element={<Ejercicio5/>}/>
          <Route path='ejercicio6' element={<Ejercicio6/>}/>
          <Route path='ejercicio7' element={<Ejercicio7/>}/>
          <Route path='ejercicio8' element={<Ejercicio8/>}/>
          <Route path='ejercicio9' element={<Ejercicio9/>}/>
          <Route path='Ejercicio10' element={<Ejercicio10/>}/>
        </Routes>
    </>
  );
}

export default App;
