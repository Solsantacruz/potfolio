import linkedin from "../../assets/linkedin.png";

const Nav = ()=> {
   return(
    <header className="bg-primary md:sticky top-0 z-10 lg:bg-primary">
    <div className="flex flex-row p-5">
      <div className="">
        <ul className="flex flex-row justify-center">
          <li className="p-2 md:mx-5 tracking-wider flex-none transition duration-200 hover:scale-110 hover:bg-violet ">
            <a href='#home'
              className="text-m text-fondo fontPoppins hover:fontPoppinsB font-bold hover:text-green"
              > Home </a>
          </li>
          <li className="p-2 md:mx-5 tracking-wider flex-none transition duration-200 hover:scale-110 hover:bg-rose">
            <a href='#about'
              className="text-m text-fondo fontPoppins hover:fontPoppinsB font-bold hover:text-green"
               > Sobre mi </a>
          </li>
          <li className="p-2 md:mx-5 tracking-wider flex-none transition duration-200 hover:scale-110 hover:bg-orange">
            <a href='#proyectos'
              className="text-m text-fondo fontPoppins hover:fontPoppinsB font-bold hover:text-green"
              > Proyectos </a>
          </li>
          <li className="p-2 md:mx5 tracking-wider flex-none transition duration-200 hover:scale-110 hover:bg-yellow">
            <a href='#contacto'
              className="text-m text-fondo fontPoppins hover:fontPoppinsB font-bold hover:text-green"
              >Contacto </a>
          </li>
        </ul>
      </div>
    </div>
    </header>
  )
  //    <div className="flex flex-row p-5 h-24 z-50">
  //     <div>
  //       <ul>
  //         <li>
  //     <Link to='/home' className="text-m text-white fontPoppins hover:fontPoppinsB font-bold"> Home </Link>
  //     </li>
  //     <li>
  //     <Link to='/aboutMe' className="text-m text-white fontPoppins hover:fontPoppinsB font-bold"> About Me </Link>
  //     </li>
  //     <li>
  //     <Link to='/Proyect' className="text-m text-white fontPoppins hover:fontPoppinsB font-bold"> Proyectos </Link>
  //     </li>
  //     <li>
  //     <Link to='/contacto' className="text-m text-white fontPoppins hover:fontPoppinsB font-bold"> Contact </Link>
  //     </li>
  //     </ul>
  //     </div>
  //    </div>
  //  )
}

export default Nav;