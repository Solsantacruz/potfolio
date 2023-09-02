import React from "react";
import { social } from "../data";



const Footer = () => {

    return (
        <footer className="bg-violet py-12">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-col space-y-6 lg:space-y-0 items-center justify-center lg:gap-4">
                    <div className="flex flex-row lg:flex-row gap-5">
                    {social.map((item, index) => {
                        const {href, icon} = item;
                        return <a className="text-green text-base lg:text-[30px]" href={href} key={index}>{icon}</a>
                    })}
                    </div>
                    <p className="mx-7 text-primary">&copy; 2023 Eliana Santa Cruz. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;