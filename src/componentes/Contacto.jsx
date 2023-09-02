import React from 'react'
import { contact } from '../data';
import FormContacto from './FormContacto';

const Contacto = ()=> {
    return(
        <section id="contacto" className="section bg-secondary">
            <div className='container mx-auto'>
                <div className="flex flex-col items-center text-center ">
                    <h2 className='section-title text-fondo lg:mb-16'> Contacta conmigo </h2>
                </div>
                <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                    <div className='flex flex-1 flex-col items-start sace-y-8mb-12 lg:mb-0 lg:pt-2'>
                        {contact.map((item,index) => {
                            const {icon, title, subtitle, description} = item;
                          return <div className='flex flex-col lg:flex-row gap-x-4 pb-5' key={index}>
                                <div className='text-rose rounded-sm w-14 h-14 flex items-start justify-center m-5 mb-4 lg:mb-0 text-2x1'>{icon}</div>
                                <div>
                                    <h4 className='font-body text-xl mb-1 text-fondo'>{title}</h4>
                                    <p className='mb-1 text-fondo'>{subtitle}</p>
                                    <p className='text-rose font-normal'>{description}</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <FormContacto />
                </div>
            </div>
        </section>
    )
}

export default Contacto;