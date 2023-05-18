import { createRoot } from 'react-dom/client';
import Projects from './Projects';
import Hero from "./Hero";
import Footer from './Footer';

const App = () => {

    const projects = [
        {id: 1, title: "one", stack: ['symfmony', 'react'], styled: true},
        {id: 2, title: "two", stack: ['symfmony', 'react'], styled: false},        
        {id: 3, title: "three", stack: ['symfmony', 'react'], styled: true},
        {id: 4, title: "three", stack: ['symfmony', 'react'], styled: false},
    ];

    return (
        <div className="min-vh-100">
            <Hero />
            <Projects projects={projects} />
            <Footer />
        </div>
    );
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);