import AboutUs from './components/aboutUs/Index';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/navbar/Index';
import SimplifyWork from './components/SimplifyWork';
import Testimonials from './components/testimonials/Index';

function App() {
  return (
    <section className="bg-pattern bg-[top_-6rem_right_-3rem] bg-no-repeat">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Testimonials />
      <SimplifyWork />
      <Footer />
    </section>
  );
}

export default App;
