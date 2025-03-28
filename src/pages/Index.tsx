
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SearchBox from "@/components/SearchBox";
import HospitalCard from "@/components/HospitalCard";
import { hospitals } from "@/data/hospitalData";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Show more featured hospitals
  const featuredHospitals = hospitals.slice(0, 6);

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
            opacity: 0.15
          }}
        />
        
        <motion.div 
          className="container-custom text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-medical-600 to-medical-800">
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
            <div className="absolute -inset-4 bg-medical-100/30 rounded-xl blur-xl -z-10"></div>
            <SearchBox variant="large" className="max-w-3xl mx-auto shadow-xl" />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Featured Hospitals Section */}
      <section className="py-20 bg-gradient-to-b from-white to-medical-50/30">
        <div className="container-custom">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2 relative">
              <span className="relative inline-block">
                Featured Hospitals
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-medical-400 rounded-full"></span>
              </span>
            </h2>
            <p className="text-muted-foreground text-center max-w-xl">Top-rated medical facilities in your area with exceptional services and care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHospitals.map((hospital, index) => (
              <motion.div
                key={hospital.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="shadow-md rounded-xl overflow-hidden"
              >
                <HospitalCard hospital={hospital} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -inset-40 bg-medical-50/50 rounded-[100%] blur-3xl -z-10"></div>
        <div className="container-custom">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2 relative">
              <span className="relative inline-block">
                How It Works
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-medical-400 rounded-full"></span>
              </span>
            </h2>
            <p className="text-muted-foreground mb-10 text-center max-w-2xl">
              Find your ideal healthcare provider in just a few simple steps
            </p>
          </div>
          
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
                className="glass p-8 rounded-xl text-center shadow-lg border border-medical-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-medical-300 to-medical-500"></div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-medical-400 to-medical-600 text-white flex items-center justify-center mx-auto mb-6 font-semibold text-xl shadow-md">
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
