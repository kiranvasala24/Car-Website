import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Clock } from 'lucide-react';

const Offer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-1"
        >
          <div className="bg-background rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
                >
                  <Gift className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Limited Time Offer</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl font-display font-bold"
                >
                  Special Launch <span className="text-gradient">Discount</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-muted-foreground"
                >
                  Get up to <span className="text-primary font-bold">$15,000 off</span> on select 2024 models. 
                  Plus, enjoy complimentary premium maintenance for 3 years.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary-foreground">1</span>
                    </div>
                    <div>
                      <div className="font-semibold">Zero Down Payment</div>
                      <div className="text-sm text-muted-foreground">No upfront costs, flexible financing</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary-foreground">2</span>
                    </div>
                    <div>
                      <div className="font-semibold">Extended Warranty</div>
                      <div className="text-sm text-muted-foreground">5-year comprehensive coverage included</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary-foreground">3</span>
                    </div>
                    <div>
                      <div className="font-semibold">Free Charging Credits</div>
                      <div className="text-sm text-muted-foreground">$2,000 in charging network credits</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <Button variant="hero" size="lg">
                    Claim Offer Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-3xl p-8 space-y-6">
                  <div className="flex items-center gap-3 text-primary">
                    <Clock className="w-6 h-6" />
                    <span className="font-semibold">Offer ends in:</span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { value: '12', label: 'Days' },
                      { value: '08', label: 'Hours' },
                      { value: '45', label: 'Mins' },
                      { value: '23', label: 'Secs' },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-1">{item.value}</div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="text-sm text-muted-foreground mb-2">Average savings per customer</div>
                    <div className="text-4xl font-bold text-gradient">$12,450</div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
