import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import heroCarImage from '@/assets/hero-car.jpg';

const Featured = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    'Electric powertrain with 500+ mile range',
    'Autonomous driving Level 4 capability',
    'Premium leather and sustainable materials',
    '0-60 mph in 2.8 seconds',
    'Advanced AI-powered safety systems',
    'Customizable interior lighting and ambiance',
  ];

  return (
    <section id="featured" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Masterpiece</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Introducing our flagship model - where innovation meets perfection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src={heroCarImage}
                alt="Featured Car"
                className="w-full h-auto rounded-3xl shadow-elevated"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-6 py-3 shadow-elevated">
                <div className="text-sm font-medium">Limited Edition</div>
                <div className="text-2xl font-bold">2024 Model</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <div className="text-sm text-primary font-semibold mb-2">FLAGSHIP MODEL</div>
              <h3 className="text-4xl font-display font-bold mb-4">
                Apex Hyperion EV
              </h3>
              <p className="text-xl text-muted-foreground">
                The pinnacle of automotive engineering. Experience unmatched performance, luxury, 
                and sustainability in one breathtaking package.
              </p>
            </div>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div>
                <div className="text-sm text-muted-foreground">Starting at</div>
                <div className="text-4xl font-bold text-gradient">$149,900</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg">
                Reserve Now
              </Button>
              <Button variant="outline" size="lg">
                Schedule Test Drive
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
