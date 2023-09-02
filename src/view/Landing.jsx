import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import { faReact, faJs, faNode, faDatabase, faServer, faPalette } from '@fortawesome/free-solid-svg-icons';

const Landing = () =>{

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

//   const stackIcons = [
//     faReact, faJs, faNode, faDatabase, faServer, faPalette
//   ];

    return(

        <div className="flex md:flex-row justify-center items-center sm:h-screen min-h-screen bg-gradient-to-r from-purple-700 via-indigo-800 to-blue-900 px-4 py-16">
        <div className="text-start absolute left-20 border-2 border-white rounded-lg h-[550px] mt-10 ml-20 mr-20  shadow-md shadow-gris">
        <div className='ml-16 pt-20'>
        <p className="text-white font-arial text-8xl font-extrabold mr-20 mt-16"><span className="bg-violet text-green">B</span>ienvenid<span className="text-violet">@</span></p>
        </div>
        <div>
        <p className="text-white font-arial text-7xl font-extrabold pt-10 pb-5 ml-40"><span  className="font-arial text-3xl font-extrabold w-20 bg-rose text-green rounded-sm">Soy</span> Eliana <span className="bg-orange text-green rounded-sm mr-20">Santa Cruz</span></p>
        </div>
        <div className="ml-60 pb-20">
          <p className="font-arial text-4xl font-extrabold bg-yellow text-green text-center rounded-lg mr-20">FullStack Developer</p>
        </div>
        </div>
        <div className="text-start absolute right-80 transition duration-200 hover:scale-110 ">
        <Link to="/home" className="text-white font-semibold py-2 px-4 rounded mb-4 border-2 border-start-700 text-3xl hover:bg-start shadow-md shadow-gris">Ingresar</Link>
        {/* {isLoading && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-t-blue-600 mx-auto mb-4"></div>
            <div className="flex justify-center">
              {stackIcons.map((icon, index) => (
                <FontAwesomeIcon key={index} icon={icon} className="w-8 h-8 opacity-0 animate-fade-in mr-4" />
              ))}
            </div>
          </div>
        )} */}
      </div>
        </div>
    //     <div className="flex justify-center items-center h-screen ">
    //     <div className="text-start absolute left-20 border-2 border-white rounded-lg h-[550px] mt-10 ml-20 mr-20  shadow-md shadow-gris">
    //     <div className='ml-16 pt-20'>
    //     <p className="text-white font-arial text-8xl font-extrabold mr-20 mt-16"><span className="bg-violet text-green">B</span>ienvenid<span className="text-violet">@</span></p>
    //     </div>
    //     <div>
    //     <p className="text-white font-arial text-7xl font-extrabold pt-10 pb-5 ml-40"><span  className="font-arial text-3xl font-extrabold w-20 bg-rose text-green rounded-sm">Soy</span> Eliana <span className="bg-orange text-green rounded-sm mr-20">Santa Cruz</span></p>
    //     </div>
    //     <div className="ml-60 pb-20">
    //       <p className="font-arial text-4xl font-extrabold bg-yellow text-green text-center rounded-lg mr-20">FullStack Developer</p>
    //     </div>
    //     </div>
    //     <div className="text-start absolute right-80 transition duration-200 hover:scale-110 ">
    //     <Link to="/home" className="text-white font-semibold py-2 px-4 rounded mb-4 border-2 border-start-700 text-3xl hover:bg-start shadow-md shadow-gris">Ingresar</Link>
    //     {/* {isLoading && (
    //       <div className="text-center">
    //         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-t-blue-600 mx-auto mb-4"></div>
    //         <div className="flex justify-center">
    //           {stackIcons.map((icon, index) => (
    //             <FontAwesomeIcon key={index} icon={icon} className="w-8 h-8 opacity-0 animate-fade-in mr-4" />
    //           ))}
    //         </div>
    //       </div>
    //     )} */}
    //   </div>
    //     </div>
    )
}

export default Landing;