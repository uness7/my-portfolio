import { AiFillLinkedin, AiFillGithub, AiFillFilePdf, AiFillProject } from "react-icons/all";


const Hero = ({pdfUrl}) => {

    function handlePDF() {
        window.open(pdfUrl, "_blank");  
    }

    return (
        <div className="text-white flex flex-col justify-center items-center h-screen">
            <div>
                <div className="text-8xl my-8 p-4 border-b-8 border-b-green-900
                font-robot font-semibold">
                    <h1>Younes Zioual</h1>
                </div>
                <div className="mt-4 p-4 text-center text-4xl font-robot font-medium">
                    <h3>Full Stack PHP Developer</h3>
                </div>

                {/* Buttons layout */}
                <div className="grid grid-cols-2 gap-2 mt-6">                    
                    <a 
                        className="px-1 w-40 place-self-end py-2 text-lg flex justify-center items-center rounded-md bg-gray-600 text-white" 
                            href="https://www.github.com/uness7" 
                            target="_blank"
                            rel="noreferrer"
                    >
                        <AiFillGithub /> <span className="ml-2">Github</span>
                    </a>
                    <a 
                        className="px-2 w-40 py-2  text-lg flex justify-center items-center rounded-md bg-blue-600 text-white" 
                            href="https://www.linkedin.com/in/younes-zioual-a739ba244/" 
                            target="_blank"
                            rel="noreferrer"
                    >
                        <AiFillLinkedin /><span className="ml-2">LinkedIn</span>
                    </a>
                    <a 
                        className="px-2 w-40 place-self-end py-2 text-lg flex justify-center items-center rounded-md bg-orange-600 text-white" 
                            href="#projects-section" 
                            rel="noreferrer"
                    >
                        <AiFillProject /> <span className="ml-2">Projects</span>
                    </a>
                    <button 
                        className="px-2 w-40 py-2 text-lg flex justify-center items-center rounded-md bg-green-900 text-white" 
                        onClick={handlePDF}
                        >
                            <AiFillFilePdf />  <span className="ml-2">Resume</span>
                    </button>  
                </div>
            </div>
        </div>
    );
}

export default Hero;


