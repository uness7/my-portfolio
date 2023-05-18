// import { useState } from "react";



const Projects = ({ projects }) => {

    // const [index, setIndex] = useState(0);

    


    return (
        <div className="text-white px-16 py-8"  id="projects-section">
            <h1 className="text-center text-6xl mb-8 font-roboto"
            >Projects</h1>
            <div className="grid grid-cols-2 gap-5 text-2xl ">
                {
                    projects.map((project)=>{
                        if(project.id%2==1) {
                            return (
                                <div
                                    key={project.id}
                                    className="py-4 px-3 w-[32rem] bg-white h-64 rounded-md card-color text-slate-100 place-self-end"                          
                                >
                                    <h1 className="text-center">{project.title}</h1>
                                    <p
                                        className="text-lg"
                                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto quos, sapiente minima totam, ipsam quidem tempora.
                                    </p>          
                                    <h2>Stack : Html, CSS, JS</h2>
                                    {/* <a href="#">Demo live</a> */}
                                </div>
                            )
                        } else {
                            return (
                                <div
                                    key={project.id}
                                    className="py-4 px-3 w-[32rem] bg-white h-64 rounded-md card-color text-slate-100"                          
                                >
                                    <h1 className="text-center">{project.title}</h1>
                                    <p
                                        className="text-lg"
                                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto quos, sapiente minima totam, ipsam quidem tempora.
                                    </p>          
                                    <h2>Stack : Html, CSS, JS</h2>
                                    {/* <a href="#">Demo live</a> */}
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}

export default Projects;