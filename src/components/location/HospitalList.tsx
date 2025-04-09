
import { motion } from "framer-motion";
import { MapPin, AlertCircle } from "lucide-react";
import HospitalCard from "@/components/HospitalCard";
import { Hospital } from "@/components/HospitalCard";
import { cn } from "@/lib/utils";

interface HospitalListProps {
  hospitals: Hospital[];
  isLoaded: boolean;
  userCoordinates: { lat: number, lng: number } | null;
  searchRadius: number;
}

const HospitalList = ({ 
  hospitals, 
  isLoaded, 
  userCoordinates,
  searchRadius
}: HospitalListProps) => {
  return (
    <>
      <div className={cn(
        "flex justify-between items-center mb-6 pb-4 border-b",
        userCoordinates ? "border-medical-100" : "border-transparent"
      )}>
        <h2 className="text-2xl font-semibold text-foreground">
          {userCoordinates ? "Nearby Hospitals" : "All Hospitals"}
        </h2>
        {userCoordinates && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-medical-50 px-3 py-1 rounded-full">
            <MapPin className="w-4 h-4 text-medical-500" />
            <span>{hospitals.length} hospitals within {searchRadius} km</span>
          </div>
        )}
      </div>
      
      {hospitals.length > 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {hospitals.map((hospital, index) => (
            <motion.div
              key={hospital.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
            >
              <HospitalCard hospital={hospital} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-16 bg-muted/30 rounded-2xl">
          <AlertCircle className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
          <h3 className="text-xl font-medium mb-2">No hospitals found in this area</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Try increasing your search radius or try a different location.
          </p>
        </div>
      )}
    </>
  );
};

export default HospitalList;
