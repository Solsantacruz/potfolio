import IT from '../assets/gif.gif' ;

const Bienvenida = () => {
      



    return(
      <section id='home' className="section bg-primary">
        <div  className="flex justify-center md:text-start">
        <div className="border-2 border-secondary rounded-lg shadow-md shadow-secondary max-w-[900px] w-[90%] py-10 mt-5 md:mt-[150px] lg:mb[400px] md:border-none md:shadow-none">
        <div className=''>
        <p className="text-fondo font-arial text-xl font-extrabold md:text-6xl lg:text-7xl ml-5">Hola, </p>
        </div>
        <div className="w-full">
        <p className="text-fondo font-arial text-[30px] md:text-[35px] lg:text-[65px] lg:pb-1 w-full font-extrabold pt-3 pb-3 ml-5">soy Eliana <span className="bg-orange text-green rounded-sm md:text-[57px]">Santa Cruz</span></p>
        </div>
        <div className="flex items-center ml-7 md:text-start lg:pt-8">
          <p className="font-arial text-[30px] lg:text-[35px] px-1 font-extrabold bg-yellow text-green text-center rounded-5 lg:py-3">FullStack Developer</p>
        </div>
        </div> 
        <div className="">
        <img
        src={IT}
        alt="IT"
        className="mx-auto  hidden md:hidden lg:block lg:w-[500px] lg:my-[150px] lg:bg-green"
      />
        </div>
    </div>
    </section>
    
    )
}

export default Bienvenida;