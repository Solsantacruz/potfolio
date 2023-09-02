import wanderlus from "./assets/wanderlust.jpg" // proyectos images
import pokeDex from './assets/pokeDex.png';
import memory from './assets/memory.png';
import blogCafe from './assets/blogCafe.png';

//img detalles proyectos
//wanderlust
import wLanding from "./assets/wanderFront.png"
import wDescubre from "./assets/wanderDescubre.jpg"
import wDetail from "./assets/wanderDetail.png"
import wLogin from "./assets/wanderLogin.jpg"
import wUsuario from "./assets/wanderPerfilusuario.png"
import wDachboard from "./assets/dashboardWander.png"
//pokeDex
import pLandin from "./assets/pokeLanding.png"
import pDex from "./assets/pokeDex.png"
import pDetail from "./assets/pokeDetail.png"
import pForm from "./assets/pokeForm.png"
import pAbout from "./assets/pokeAbout.png"
//memory
import descubierto from "./assets/memoryDescubierto.png"
//blogcafe
import cLanding from "./assets/blogCafeLandin.png"
import cCurso from "./assets/cafeCursos.png"
import cContacto from "./assets/contactoCafe.png"



//  icons
import {
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiDribbble,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
    FiLinkedin,
  } from 'react-icons/fi';

  // skills images
import SkillImg1 from './assets/skills/html5.png';
import SkillImg2 from './assets/skills/css3.png';
import SkillImg3 from './assets/skills/js.png';
import SkillImg4 from './assets/skills/reactjs.png';
import SkillImg5 from './assets/skills/redux.png';
import SkillImg6 from './assets/skills/nodejs.png';
import SkillImg7 from './assets/skills/sequelize.png';
import SkillImg8 from './assets/skills/psql.png';
import SkillImg9 from './assets/skills/express.png';
import SkillImg10 from './assets/skills/git.png';


export const myProjects = [
    {
        image: wanderlus,
        name:"WANDERLUST",
        date:"AGUST 2023",
        description:"Una plataforma e-commerce para apasionados por viajar, ofrece paquetes hacia los destinos más icónicos del mundo. Pueden adaptar la aventura agregando actividades personalizadas al itinerario, asegurando que su viaje sea único",
        technologies:["React", "Redux", "TailwindCSS", "Firebase", "PostgreSQL", "Sequelize", "Express", "Cloudinary", "Nodemailer", "Vercel", "Railway"],
        deploy:"https://wanderlust-phi.vercel.app",
        repository:"https://github.com/Wanderlust-8/wanderlust",
        video:"https://www.youtube.com/watch?v=zCYnhixTC0c",
        
    },
    {
        image: pokeDex,
        name:"Poke-Dex",
        date:"JUNE 2023",
        description: "Una Poke-Dex en linea en la que podrán convertirse en entrenadores Pokémon. En el encontrarán los clásicos pokemones, descubrirán nuevos, ver información detallada de cada uno, podrán filtrarlos por diferentes tipos, ordenarlos por nivel de ataque, de forma ascendente y descendente según su nombre. Una barra de búsqueda para encontrar tu Pokémon preferido mas rápido y hasta crear tu propio Pokémon. También cuenta con un filtrado en donde podrás solo visualizar los de tu propia creación.",
        technologies:["React", "Redux", "CSS3", "Node.js", "PostgreSQL", "Sequelize", "Express"],
        deploy:"https://pokemon-solsantacruz.vercel.app",
        repository:"https://github.com/Solsantacruz",
        video:"https://youtu.be/ZU0merN8wZw",
        
    },
    {
        image: memory,
        name:"Memory(juego)",
        date:"MAY 2023",
        description: "Sumérgete en un desafiante y entretenido juego de memoria diseñado para poner a prueba tus habilidades cognitivas y tu agudeza visual. En Memory, el objetivo es simple pero adictivo: encontrar todas las cartas coincidentes en el menor tiempo posible.",
        technologies:["HTML5","CSS3", "JavaScript"],
        deploy:"https://juegomemory-js.netlify.app",
        repository:"https://github.com/Solsantacruz",
        video:"",
        
    },
    {
      image: blogCafe,
      name:"Blog Cafe",
      date:"NOV 2021",
      description: "Blog Café es una web que presenta información sobre café y utiliza la metodología BEM (Bloque, Elemento, Modificador) en CSS para garantizar una estructura de código clara y organizada. Incluye detalles sobre diferentes variedades de café, así como un formulario de contacto.",
      technologies:["HTML5","CSS3"],
      deploy:"https://coffieblog.netlify.app",
      repository:"https://github.com/Solsantacruz",
      video:"",
  },

]

//img detalles proyectos

export const proyectDetail = [
  {
    image: [wLanding, wDescubre, wDetail, wLogin, wUsuario, wDachboard],
    name:"Wanderlust",
    date:"AGUST 2023",
    description: "Una plataforma e-commerce para apasionados por viajar, ofrece paquetes hacia los destinos más icónicos del mundo. Pueden adaptar la aventura agregando actividades personalizadas al itinerario, asegurando que su viaje sea único",
    technologies:["React", "Redux", "TailwindCSS", "Firebase", "PostgreSQL", "Sequelize", "Express", "Cloudinary", "Nodemailer", "Vercel", "Railway"],
        deploy:"https://wanderlust-phi.vercel.app",
        repository:"https://github.com/Wanderlust-8/wanderlust",
        video:"https://www.youtube.com/watch?v=zCYnhixTC0c",
},
{
    image: [pokeDex, pDetail, pForm, pAbout],
    name:"Poke-Dex",
    date:"JUNE 2023",
    description: "Una Poke-Dex en linea en la que podrán convertirse en entrenadores Pokémon. En el encontrarán los clásicos pokemones, descubrirán nuevos, ver información detallada de cada uno, podrán filtrarlos por diferentes tipos, ordenarlos por nivel de ataque, de forma ascendente y descendente según su nombre. Una barra de búsqueda para encontrar tu Pokémon preferido mas rápido y hasta crear tu propio Pokémon. También cuenta con un filtrado en donde podrás solo visualizar los de tu propia creación.",
    technologies:["React", "Redux", "CSS3", "Node.js", "PostgreSQL", "Sequelize", "Express"],
    deploy:"https://pokemon-solsantacruz.vercel.app",
    repository:"https://github.com/Solsantacruz",
    video:"https://youtu.be/ZU0merN8wZw",
    
},
{
    image: [memory, descubierto],
    name:"Memory(juego)",
    date:"FEB 2022",
    description: "Sumérgete en un desafiante y entretenido juego de memoria diseñado para poner a prueba tus habilidades cognitivas y tu agudeza visual. En Memory, el objetivo es simple pero adictivo: encontrar todas las cartas coincidentes en el menor tiempo posible.",
    technologies:["HTML5","CSS3", "JavaScript"],
    deploy:"https://juegomemory-js.netlify.app",
    repository:"https://github.com/Solsantacruz",
    video:"",
    
},
{
  image: [cLanding, cCurso, cContacto],
  name:"Blog Cafe",
  date:"NOV 2021",
  description: "Blog Café es una web que presenta información sobre café y utiliza la metodología BEM (Bloque, Elemento, Modificador) en CSS para garantizar una estructura de código clara y organizada. Incluye detalles sobre diferentes variedades de café, así como un formulario de contacto y completamente responsive.",
  technologies:["HTML5","CSS3"],
  deploy:"https://coffieblog.netlify.app",
  repository:"https://github.com/Solsantacruz",
  video:"",
},
]


// skill
export const skills = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
      image: SkillImg4,
    },
    {
      image: SkillImg5,
    },
    {
      image: SkillImg6,
    },
    {
      image: SkillImg7,
    },
    {
      image: SkillImg8,
    },
    {
        image: SkillImg9,
    },
    {
        image: SkillImg10,
    },
  ];
  

// social
export const social = [
    {
      icon: <FiGithub />,
      href: 'https://github.com/Solsantacruz',
    },
    {
      icon: <FiLinkedin />,
      href: 'https://www.linkedin.com/in/elianasoledadsantacruztorres/',
    },
  ];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Tienes alguna pregunta?',
    subtitle: 'Estoy aqui para ayudarte.',
    description: 'Mi correo es: solsantacruz69@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Mi Ubicación',
    subtitle: 'Madrid, España',
    description: 'Sirviendo a clientes en todo el mundo',
  },
];