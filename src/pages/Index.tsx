
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SearchBox from "@/components/SearchBox";
import HospitalCard from "@/components/HospitalCard";
import { hospitals } from "@/data/hospitalData";
import { MapPin } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Show a subset of featured hospitals
  const featuredHospitals = hospitals.slice(0, 3);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 -z-10 bg-gradient-to-b from-medical-50/50 to-transparent" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.05
          }}
        />
        
        <motion.div 
          className="container-custom text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Find the Right Hospital for Your Healthcare Needs
          </h1>
          <p className="text-xl text-muted-foreground mb-10 md:px-10 text-balance">
            Quickly locate hospitals near you, compare facilities, and make informed decisions about your healthcare.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <SearchBox variant="large" className="max-w-3xl mx-auto shadow-lg" />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="container-custom mt-10 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-medical-500 mr-2" />
            <button className="text-medical-600 hover:text-medical-700 transition-colors">
              Use my current location
            </button>
          </div>
        </motion.div>
      </section>
      
      {/* Featured Hospitals Section */}
      <section className="py-20 bg-gradient-to-b from-white to-medical-50/30">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-2">Featured Hospitals</h2>
          <p className="text-muted-foreground mb-10">Top-rated medical facilities in your area</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHospitals.map((hospital, index) => (
              <motion.div
                key={hospital.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <HospitalCard hospital={hospital} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-2 text-center">How It Works</h2>
          <p className="text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
            Find your ideal healthcare provider in just a few simple steps
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Search",
                description: "Enter your location or healthcare need to find hospitals near you."
              },
              {
                step: "2",
                title: "Compare",
                description: "Browse detailed profiles, ratings, services, and reviews."
              },
              {
                step: "3",
                title: "Choose",
                description: "Select the hospital that best meets your specific healthcare needs."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass p-8 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-medical-500 text-white flex items-center justify-center mx-auto mb-6 font-semibold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
