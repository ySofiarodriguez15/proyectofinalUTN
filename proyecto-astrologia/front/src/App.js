import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Navegacion from './componentes/Navegacion.jsx';
import Home from './componentes/Home.jsx';
import Formulario from './componentes/Formulario.jsx';
import About from './componentes/About.jsx';
import Servicios from './componentes/Servicios.jsx';
import Donde from './componentes/Donde.jsx';
import Footer from './componentes/Footer.jsx';


function App() {
  return (
    <div className="App">
        <h1 className='h1Home'>Bienvenidos a Plutón en línea</h1>
        <Navegacion />
        <Routes>  
          <Route path="/" element = {<Home />} />
          <Route path="About" element = {<About />} />
          <Route path="Servicios" element = {<Servicios />} />
          <Route path="Donde" element = {<Donde />} />
          <Route path="Formulario" element = {<Formulario />} />
          
        </Routes> 
        

        <Footer/>
    </div>
  );
}

export default App;
