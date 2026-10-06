import './App.css';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Topics from './components/Topics/Topics';
import Collaborators from './components/Collaborators/Collaborators';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="app">
      <main>
        <Hero />
        <About />
        <Topics />
        <Collaborators />
      </main>

      <Footer />
    </div>
  );
}