import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Hardware from '../components/Hardware';
import Plans from '../components/Plans';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <div className="stars-bg" />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Hardware />
        <Plans />
        <Reviews />
      </main>
      <Footer />
    </>
  );
};

export default Home;
