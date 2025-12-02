import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Star } from 'lucide-react';
import carSUV from '@/assets/car-suv.jpg';
import carSports from '@/assets/car-sports.jpg';
import carSedan from '@/assets/car-sedan.jpg';

const Popular = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cars = [
    {
      name: 'Phantom SUV Elite',
      category: 'Luxury SUV',
      price: '$89,900',
      rating: 4.9,
      image: carSUV,
      specs: ['380 HP', 'AWD', '0-60 in 4.5s'],
    },
    {
      name: 'Veloce GT Coupe',
      category: 'Sports Car',
      price: '$124,500',
      rating: 5.0,
      image: carSports,
      specs: ['560 HP', 'RWD', '0-60 in 3.2s'],
    },
    {
      name: 'Prestige Sedan X',
      category: 'Executive Sedan',
      price: '$74,900',
      rating: 4.8,
      image: carSedan,
      specs: ['320 HP', 'AWD', '0-60 in 5.1s'],
    },
  ];

  return (
    <section id="popular" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Popular</span> Models
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our most sought-after vehicles, loved by thousands of satisfied customers worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="group overflow-hidden border-border hover:border-primary transition-smooth hover:shadow-elevated bg-card">
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm font-semibold">{car.rating}</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">{car.category}</div>
                    <h3 className="text-2xl font-display font-bold">{car.name}</h3>
                  </div>

                  <div className="flex gap-2">
                    {car.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="text-sm text-muted-foreground">Starting at</div>
                      <div className="text-2xl font-bold text-primary">{car.price}</div>
                    </div>
                    <Button variant="outline" size="sm" className="group">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg">
            View All Models
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Popular;
