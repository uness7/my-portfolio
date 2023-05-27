/* eslint-disable jsx-a11y/anchor-is-valid */

import { AiOutlineArrowRight } from "react-icons/all";



const Projects = ({ projects }) => {    

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
                                    className="py-4 px-3 w-[32rem] bg-white h-64 rounded-md card-color text-slate-100 place-self-end flex flex-col justify-evenly"                          
                                >
                                    <h1 className="text-center pb-4 border-green-900 border-b-4">{project.title}</h1>
                                    <p
                                        className="text-lg"
                                    >
                                        {project.description}
                                    </p>          
                                    <div className="flex flex-row space-x-2">
                                        {
                                            project.stack.map((tech)=>{
                                                return <span
                                                    key={tech}
                                                    className="text-lg"
                                                >{tech}</span>
                                            })
                                        }
                                    </div>
                                    <div>
                                        <a href="#" className="text-lg flex flex-row">
                                            
                                            <span>Demo Live</span>
                                            <span className="mt-2 ml-2"><AiOutlineArrowRight /></span>
                                        </a>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div
                                    key={project.id}
                                    className="py-4 px-3 w-[32rem] bg-white h-64 rounded-md card-color text-slate-100 flex flex-col justify-evenly"                          
                                >
                                    <h1 className="text-center pb-4 border-green-900 border-b-4">{project.title}</h1>
                                    <p
                                        className="text-lg font-sans font-normal"
                                    >
                                        {project.description}
                                    </p>          
                                    <div className="flex flex-row space-x-2">
                                        {
                                            project.stack.map((tech)=>{
                                                return <span
                                                    key={tech}
                                                    className="text-lg"
                                                >{tech}</span>
                                            })
                                        }
                                    </div>
                                    <div>
                                        <a href="#" className="text-lg flex flex-row">
                                            
                                            <span>Demo Live</span>
                                            <span className="mt-2 ml-2"><AiOutlineArrowRight /></span>
                                        </a>
                                    </div>
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