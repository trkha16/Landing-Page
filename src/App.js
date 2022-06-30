import "./App.css";
import About from "./components/About";
import Features from "./components/Features";

import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Features />
            <About />
        </div>
    );
}

export default App;
