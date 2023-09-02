import React from "react";
import photoProfile from "../assets/perfilNew.png";
import me from "../assets/usuario.png";
import Skills from "./Skills";
import Social from "./Social";

const About = () => {
    return(
        <section id="about" class="section bg-secondary py-8 md:py-16 lg:py-2">
      <div class="container mx-auto lg:mb-[70px] mt-16">
      <h2 className="text-3xl font-extrabold text-fondo ml-[130px] md:ml-[450px] lg:ml-[520px]">Sobre Mi</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 lg:w-full items-center">
        <div class="text-center md:text-center md:mt-8 lg:mt-10 lg:ml-20 md:w-2/3 lg:w-full ml-4">
            <img
              src={photoProfile}
              alt="Eliana Santa Cruz"
              class="w-[70%] md:w-3/5 h-auto rounded-full mx-12 my-5 md:mx-0 md:mt-7"
            />
          </div>
          <div class="text-center md:text-left md:mt-12 lg:mt-5 md:ml-12 lg:ml-10 xl:pt-24">
            <p class="text-fondo xl:text-md  fontPoppins md:text-lg mx-2 mt-2 italic pb-5">
              Bienvenid@ a mi rincon en la web. Explorando el fascinante mundo de la tecnologia
              con el objetivo de crear interfaces cautivadoras y dar vida a servidores eficientes,
              transformando lineas de codigo en experiencias que cautiven y resuelvan.
              Estoy aquí para construir, aprender y dejar una huella duradera.
            </p>
            <div className="bg-rose md:w-full md:h-[40px] py-1 w-[150px] ml-[110px] mb-5 lg:ml-0">
            <Social />
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </section>
    )
}

export default About;