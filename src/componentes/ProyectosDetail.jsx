import React from "react";
import { proyectDetail } from "../data";
import {
    FiLink,
    FiGithub,
  } from 'react-icons/fi';
import { useState } from "react";

const ProyectostDetail = () => {

//     const [modalImage, setModalImage] = useState(null);

//   const openModal = (imageUrl) => {
//     setModalImage(imageUrl);
//   };

//   const closeModal = () => {
//     setModalImage(null);
//   };
  return (
    <section id="project-details" className="section bg-primary">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {proyectDetail.map((project, index) => (
        <div key={index} className="bg-secondary p-4 rounded-lg shadow-md">
          <div className="mb-4 bg-secondary">
            {project.image.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt={`Proyecto ${project.name}`}
                className="mb-4 rounded-md max-w-xs max-h-40 inline-block lg:inline lg:mx-5"
                
              />
            ))}
          </div>
          <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
          <p className="text-fondo text-sm mb-4">{project.date}</p>
          <p className="text-fondo">{project.description}</p>
          <div className="mt-4">
            <p className="text-fondo text-sm">Tecnologías:</p>
            <p className="text-sm text-orange">{project.technologies.join(" | ")}</p>
          </div>
          <div className="mt-4 flex flex-row">
            <a
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fondo lg:text-[25px] hover:underline mr-4"
            >
              <FiLink />
            </a>
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fondo lg:text-[25px] hover:underline"
            >
              <FiGithub />
            </a>
          </div>
        </div>
    ))}
    </div>
    </section> 
  );
};

export default ProyectostDetail;