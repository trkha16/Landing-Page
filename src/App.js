import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";

import Navbar from "./components/Navbar";
import OurService from "./components/OurService";

function App() {
    return (
        <div className="App">
            {<Navbar />}
            <Features />
            <About />
            <OurService />
            <Gallery />
        </div>
    );
}

export default App;
