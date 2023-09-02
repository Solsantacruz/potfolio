import React from "react";
import ProyectSlider from "./ProyectSlider";
import iconProyect from "../assets/proyectos.png"
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import ProyectostDetail from "./ProyectosDetail";



const Proyect = () => {

  return (
    <section id="proyectos" className="section bg-primary">
     <div className="container mx-auto">
        <div className="flex flex-col items-center">
            <img src={iconProyect} className="w-16 lg:w-[60px] inline-block mb-4 py-10 lg:pt-[80px] lg:pb-1"/>
            <h2 className="section-title text-fondo">
                Mis Proyectos
            </h2>
            <p className="subtitle text-fondo text-center">Una muestra de mi creatividad y habilidades técnicas en acción. Explora una variedad de proyectos que abarcan diseño, desarrollo y más. Descubre cómo transformo ideas en realidad.</p>
        </div>
        <ProyectSlider />
        <Link to="proyect-detail" className="bg-rose text-primary p-4 font-bold">Ver Detalles</Link>
     </div>
    </section>
  );
};

export default Proyect;




