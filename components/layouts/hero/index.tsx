'use client'

import { Button } from "@/components/ui/button";
import { PROFILE_INFO, SOCIAL_LINKS } from "@/data";
import { Download } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg text-muted-foreground font-medium">
                Hello, I'm
              </p>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                {PROFILE_INFO.name}
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-primary font-semibold">
                {PROFILE_INFO.title}
              </h2>
              
              {/* Fixed: Changed to description or bio */}
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                {PROFILE_INFO.description || PROFILE_INFO.bio}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href={PROFILE_INFO.resumeLink} download>
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Social Links - Fixed */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-4 pt-4"
            >
              {SOCIAL_LINKS.map((link, index) => {
                // Try to get the icon component from the imported data
                const IconComponent = link.icon;
                
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 flex items-center justify-center"
                    aria-label={`Visit my ${link.name}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {/* Render the icon if it's a component */}
                    {typeof IconComponent === 'function' ? (
                      <IconComponent className="w-5 h-5" />
                    ) : typeof link.icon === 'string' ? (
                      // If it's a string, assume it's an icon name or URL
                      <span>{link.icon}</span>
                    ) : null}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Avatar */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                <img
                  src={PROFILE_INFO.avatar}
                  alt={`Portrait of ${PROFILE_INFO.name}`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Optional: Add decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 -z-10"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary/5 -z-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 6,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;