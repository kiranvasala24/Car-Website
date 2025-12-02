import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Popular from '@/components/Popular';
import Features from '@/components/Features';
import Featured from '@/components/Featured';
import Offer from '@/components/Offer';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Popular />
        <Features />
        <Featured />
        <Offer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
