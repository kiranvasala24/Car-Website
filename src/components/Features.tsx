import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Headphones, Wifi, Sparkles, Battery, Navigation } from 'lucide-react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Smartphone,
      title: 'Smart Integration',
      description: 'Seamlessly connect your devices with our advanced infotainment system.',
    },
    {
      icon: Headphones,
      title: 'Premium Sound',
      description: 'Immerse yourself in crystal-clear audio with our high-fidelity sound system.',
    },
    {
      icon: Wifi,
      title: 'Always Connected',
      description: 'Stay online with built-in 5G connectivity and hotspot capabilities.',
    },
    {
      icon: Sparkles,
      title: 'Ambient Lighting',
      description: 'Customizable LED lighting creates the perfect atmosphere for every journey.',
    },
    {
      icon: Battery,
      title: 'Extended Range',
      description: 'Travel further with our efficient battery and hybrid technology.',
    },
    {
      icon: Navigation,
      title: 'AI Navigation',
      description: 'Intelligent route planning with real-time traffic updates and suggestions.',
    },
  ];

  return (
    <section id="features" ref={ref} className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Advanced <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology meets luxury comfort in every detail of our vehicles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="relative bg-background border border-border rounded-2xl p-8 hover:border-primary transition-smooth">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
