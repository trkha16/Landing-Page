import "./App.css";
import About from "./components/About";
import Features from "./components/Features";

import Navbar from "./components/Navbar";
import OurService from "./components/OurService";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Features />
            <About />
            <OurService />
        </div>
    );
}

export default App;
