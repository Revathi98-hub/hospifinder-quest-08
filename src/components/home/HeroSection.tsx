
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SearchBox from "@/components/SearchBox";

interface HeroSectionProps {
  isLoaded: boolean;
  onSearch: (location: string, state?: string, district?: string, hospitalType?: string) => void;
}

const HeroSection = ({ isLoaded, onSearch }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4 min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-100 to-transparent" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15
        }}
      />
      
      <motion.div 
        className="container-custom text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Find the Right Hospital for Your Healthcare Needs
        </h1>
        <p className="text-xl text-muted-foreground mb-10 md:px-10 text-balance leading-relaxed">
          Quickly locate hospitals near you, compare facilities, and make informed decisions about your healthcare.
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative z-10"
        >
          <SearchBox 
            onSearch={onSearch}
            className="max-w-xl mx-auto"
            variant="large"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
