
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Star, ArrowLeft } from "lucide-react";

interface HospitalHeaderProps {
  hospital: {
    name: string;
    image: string;
    address: string;
    open: boolean;
    openHours: string;
    rating: number;
    ratingCount: number;
  };
  isLoaded: boolean;
}

const HospitalHeader = ({ hospital, isLoaded }: HospitalHeaderProps) => {
  return (
    <div className="relative w-full h-[40vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${hospital.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      
      <div className="absolute inset-x-0 bottom-0 container-custom pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/search" 
            className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to results
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white shadow-text">{hospital.name}</h1>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
            <div className="flex items-center text-white/90">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{hospital.address}</span>
            </div>
            
            <div className="flex items-center text-white/90">
              <Clock className="w-4 h-4 mr-1" />
              <span className={hospital.open ? "text-green-400" : "text-red-400"}>
                {hospital.open ? "Open" : "Closed"} · {hospital.openHours}
              </span>
            </div>
            
            <div className="flex items-center text-white/90">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{hospital.rating} ({hospital.ratingCount} reviews)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HospitalHeader;
