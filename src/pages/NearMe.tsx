
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hospitals, getHospitalsByLocation } from "@/data/hospitalData";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

// Import our new components
import LocationFinder from "@/components/location/LocationFinder";
import RadiusSelector from "@/components/location/RadiusSelector";
import HospitalList from "@/components/location/HospitalList";
import LoadingState from "@/components/location/LoadingState";

const NearMe = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLocating, setIsLocating] = useState(false);
  const [nearbyHospitals, setNearbyHospitals] = useState(hospitals);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userCoordinates, setUserCoordinates] = useState<{lat: number, lng: number} | null>(null);
  const [searchRadius, setSearchRadius] = useState<number>(5);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Simulate loading state for demo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLocationDetected = (latitude: number, longitude: number) => {
    setUserCoordinates({ lat: latitude, lng: longitude });
    
    // Filter hospitals by location radius
    const locatedHospitals = getHospitalsByLocation(latitude, longitude, searchRadius);
    
    setNearbyHospitals(locatedHospitals);
    
    toast({
      title: "Location detected",
      description: `Showing hospitals within ${searchRadius} km of your location.`,
    });
  };

  const handleRadiusChange = (value: number[]) => {
    const newRadius = value[0];
    setSearchRadius(newRadius);
    
    if (userCoordinates) {
      const locatedHospitals = getHospitalsByLocation(
        userCoordinates.lat, 
        userCoordinates.lng,
        newRadius
      );
      setNearbyHospitals(locatedHospitals);
      
      toast({
        title: "Radius Updated",
        description: `Showing hospitals within ${newRadius} km of your location.`,
      });
    }
  };
  
  return (
    <div className="min-h-screen pb-20 pt-24 bg-gradient-to-b from-background to-medical-50/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">Hospitals Near Me</h1>
          <p className="text-muted-foreground mb-8">
            Find healthcare facilities closest to your current location for immediate medical attention.
          </p>
          
          <LocationFinder 
            onLocationDetected={handleLocationDetected}
            isLocating={isLocating}
            setIsLocating={setIsLocating}
          />
          
          {userCoordinates && (
            <RadiusSelector 
              searchRadius={searchRadius}
              onRadiusChange={handleRadiusChange}
            />
          )}
        </motion.div>
        
        {isLoading ? (
          <LoadingState />
        ) : (
          <HospitalList 
            hospitals={nearbyHospitals}
            isLoaded={isLoaded}
            userCoordinates={userCoordinates}
            searchRadius={searchRadius}
          />
        )}
      </div>
    </div>
  );
};

export default NearMe;
