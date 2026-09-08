import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import Activities from '@/components/Activities';
import Therapies from '@/components/Therapies';
import FunctionalTraining from '@/components/FunctionalTraining';
import Team from '@/components/Team';
import Schedule from '@/components/Schedule';
import Enrollment from '@/components/Enrollment';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Pillars />
        <Activities />
        <Therapies />
        <FunctionalTraining />
        <Team />
        <Schedule />
        <Enrollment />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
