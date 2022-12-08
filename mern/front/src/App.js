import {Routes, Route} from "react-router-dom";
import Navegacion from './componentes/Navegacion' 
import Main from './componentes/Main' 
import Formulario from './componentes/Formulario' 


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element = {<Main />} />
          <Route path="Formulario" element = {<Formulario />} />
        </Routes>
    </>
  );
}

export default App;
