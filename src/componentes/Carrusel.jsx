// import { Carousel, Typography, Button, slider } from "@material-tailwind/react";
// import { ChevronLeft, ChevronRight} from "react-feather";
// import { useState, useEffect } from "react";
// import { CarouselProps } from "@material-tailwind/react";
// import { myProjects } from "../data";
 
// const Carrusel = ({autoSlide = false, autoSlideInterval = 4000}) => {

//   const [curr, setCurr] = useState(0)

//     const prev = () => setCurr((curr) => (curr === 0 ? slider.length -1 : curr -1))
//     const next = () => setCurr((curr) => (curr === slider.length -1 ? 0 : curr +1))

//     useEffect(() => {
//         if(!autoSlide) return 
//         const sliderInterval = setInterval(next, autoSlideInterval)
//         return ()=>  clearInterval(sliderInterval)
//     }, []);
//   return (
//     <Carousel className="rounded-xl">
//       {myProjects.map((slide, index) => (
//         <div
//           key={index}
//           className={`relative h-full w-full ${
//             index === curr ? "" : "hidden"
//           }`}
//         >
//           <img
//             src={slide.image}
//             alt={`image`}
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
//             <div className="w-3/4 text-center md:w-2/4">
//               <Typography
//                 variant="h1"
//                 color="white"
//                 className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//               >
//                 {slide.name}
//               </Typography>
//               <Typography
//                 variant="lead"
//                 color="white"
//                 className="mb-12 opacity-80"
//               >
//                 {slide.description}
//               </Typography>
//             <div className="flex gap-2">
//               <Button size="lg" color="white">
//                 Explore
//               </Button>
//               <Button size="lg" color="white" variant="text">
//                 Gallery
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       ))} 
//               <div className="absolute inset-0 flex items-center justify-between p-4">
//                   <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-green-800 hover:bg-violet">
//                       <ChevronLeft size={40}/>
//                   </button>
//                   <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-green-800 hover:bg-violet">
//                       <ChevronRight size={40}/>
//                   </button>
//               </div>
//               <div className="absolute bottom-4 right-0 left-0">
//                   <div className="flex items-center justify-center gap-2">
//                       {myProjects.map((_, i) => (
//                           <div className={`transition-all w-3 h-3 bg-green rounded-full
//                           ${curr === i ? "p-2" : "bg-opacity-50"}`}/>
//                       ))}
//                   </div>
//               </div>
//     </Carousel>
//   );
// }

// export default Carrusel;