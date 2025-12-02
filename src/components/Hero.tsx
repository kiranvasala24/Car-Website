import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Award } from 'lucide-react';
import heroCarImage from '@/assets/hero-car.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">New Electric Models Available</span>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Drive Your
              <br />
              <span className="text-gradient">Dream Car</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Experience luxury, performance, and innovation with our exclusive collection of premium vehicles.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="group">
              Explore Cars
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-primary">250+</div>
              <div className="text-sm text-muted-foreground">Premium Cars</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-3xl font-bold text-primary">15K+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - Car Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={heroCarImage}
              alt="Luxury Sports Car"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10" />
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute top-10 -left-4 bg-card border border-border rounded-2xl p-4 shadow-elevated"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Safety First</div>
                <div className="text-xs text-muted-foreground">5-Star Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 -right-4 bg-card border border-border rounded-2xl p-4 shadow-elevated"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">Award Winner</div>
                <div className="text-xs text-muted-foreground">Best in Class</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
