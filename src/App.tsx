import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Hardware from './components/Hardware';
import Plans from './components/Plans';
import Process from './components/Process';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="stars-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Hardware />
        <Plans />
        <Process />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
