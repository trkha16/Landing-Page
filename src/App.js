import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

import Navbar from "./components/Navbar";
import OurService from "./components/OurService";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Features />
            <About />
            <OurService />
            <Gallery />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
