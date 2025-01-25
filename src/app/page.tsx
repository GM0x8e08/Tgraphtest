import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import HowItWorks from '../../components/HowItWorks';
import Features from '../../components/Features';
import Benefits from '../../components/Benefits';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <main className="content">
        <section className="hero">
          <Hero />
        </section>
        <section className="how-it-works">
          <HowItWorks />
        </section>
        <section className="features">
          <Features />
        </section>
        <section className="benefits">
          <Benefits />
        </section>
        <section className="cta-section">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
}