
import { motion } from "framer-motion";
import HospitalCard from "@/components/HospitalCard";

interface FeaturedHospitalsSectionProps {
  featuredHospitals: any[];
  isLoaded: boolean;
}

const FeaturedHospitalsSection = ({ featuredHospitals, isLoaded }: FeaturedHospitalsSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/30">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2 relative">
            <span className="relative inline-block">
              Featured Hospitals
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400 rounded-full"></span>
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
  );
};

export default FeaturedHospitalsSection;
