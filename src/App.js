import './App.css';
import Proyect from './componentes/Proyect';
import Nav from './componentes/nav/Nav';
import Bienvenida from './componentes/Bienvenida';
import About from './componentes/About';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import BackToTop from './componentes/BackToTop';
import { Routes, Route } from "react-router-dom";
import ProyectosDetail from './componentes/ProyectosDetail';




function App() {
  return (
    <div className="App">
      
<Routes>
  <Route path="/" element={<Bienvenida />} />
  <Route path="/proyect-detail" element={<ProyectosDetail />} />
  

    
    
    {/* <About />
    <Proyect />
    <Contacto />
    <Footer />
    <BackToTop /> */}

  </Routes>
    

      
    </div>
  );
}

export default App;
