import React from "react";
import './App.css';
import { NavBar} from './components/NavBar';
import { Banner } from './components/Banner.js';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="#251B37" />
      
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
