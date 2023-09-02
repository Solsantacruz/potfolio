import {skills} from "../data";


const Skills = () => {

    return(
       <section className="bg-primary"> 
       <div className="container mx-auto">
        <h2 className="text-fondo">Stack Tecnólogico </h2>
        <div className="grid grid-cols-10 md:grid-flow-row">
            {skills.map((skill, index) => {
                return (
                    <div className="flex items-center justify-center" key={index}>
                        <img src={skill.image} alt="skill"/>
                    </div>
                );
            })}
        </div>
       </div>
       </section>
    )
}

export default Skills