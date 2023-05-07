import { createRoot } from 'react-dom/client';

const App = () => {
    return (
        <div className="container">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div>
                            <h1>hello world from React</h1>
                            <p>why this is not working properly</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);