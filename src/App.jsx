import { createRoot } from 'react-dom/client';
import Projects from './Projects';
import Hero from "./Hero";
import Footer from './Footer';
// import Scroll from './Scroll';

const App = () => {
    

    const projects = [
        {id: 1, title: "one", stack: ['symfmony', 'react'], styled: true},
        {id: 2, title: "two", stack: ['symfmony', 'react'], styled: false},        
        {id: 3, title: "three", stack: ['symfmony', 'react'], styled: true},
        {id: 4, title: "three", stack: ['symfmony', 'react'], styled: false},
    ];

    const pdfFilePath = "./public/cv_younes_zioual_dev.pdf"
    return (
        <div className="min-vh-100">            
            <Hero pdfUrl={pdfFilePath} />
            <Projects projects={projects} />
            <Footer />            
        </div>
    );
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);