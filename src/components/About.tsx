import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Gauge, Zap, Shield, Trophy } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Gauge,
      title: 'High Performance',
      description: 'Experience unmatched speed and power with our cutting-edge engine technology.',
    },
    {
      icon: Zap,
      title: 'Electric Future',
      description: 'Sustainable luxury with our advanced electric and hybrid models.',
    },
    {
      icon: Shield,
      title: 'Ultimate Safety',
      description: 'Advanced safety features and 5-star crash test ratings for peace of mind.',
    },
    {
      icon: Trophy,
      title: 'Award Winning',
      description: 'Recognized globally for excellence in design, innovation, and quality.',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why Choose <span className="text-gradient">LuxeDrive</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We deliver excellence in every aspect, from performance to luxury, ensuring your driving experience is unparalleled.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background border border-border rounded-2xl p-6 h-full hover:border-primary transition-smooth hover:shadow-elevated">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg">
            Discover Our Story
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
