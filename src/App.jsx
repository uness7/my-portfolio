import { createRoot } from 'react-dom/client';
import Projects from './Projects';
import Hero from "./Hero";
import Footer from './Footer';
// import Scroll from './Scroll';

const App = () => {
    

    const projects = [
        {
            id: 1, 
            title: "Recruitment Web App", 
            description: "A web application for handling employment. Employers can hire top employees through this application.",
            stack: ['Symfmony 6', 'React 18', 'HTML', 'CSS'], 
            styled: true
        },
        {
            id: 2, 
            title: "T-shirts' Designs Store", 
            description: "A website where people can buy designs of T-shirts. The samples are made by me :)",
            stack: ['Symfmony 6', 'React 18', 'Stripe Payment'], 
            styled: false
        },        
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