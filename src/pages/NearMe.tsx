
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Loader2 } from "lucide-react";
import HospitalCard from "@/components/HospitalCard";
import { hospitals } from "@/data/hospitalData";
import { toast } from "@/components/ui/use-toast";

const NearMe = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLocating, setIsLocating] = useState(false);
  const [nearbyHospitals, setNearbyHospitals] = useState(hospitals);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Simulate loading state for demo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleGetLocation = () => {
    setIsLocating(true);
    
    if (!navigator.geolocation) {
      toast({
        title: "Geolocation is not supported by your browser",
        description: "Please enter your location manually.",
        variant: "destructive"
      });
      setIsLocating(false);
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // In a real app, we would use the coordinates to fetch nearby hospitals
        // For demo, we'll just simulate by sorting the hospitals by "distance"
        const sortedHospitals = [...hospitals].sort((a, b) => {
          const distanceA = parseFloat(a.distance?.replace(" miles", "") || "0");
          const distanceB = parseFloat(b.distance?.replace(" miles", "") || "0");
          return distanceA - distanceB;
        });
        
        setNearbyHospitals(sortedHospitals);
        setIsLocating(false);
        
        toast({
          title: "Location detected",
          description: "Showing hospitals near your current location.",
        });
      },
      (error) => {
        let errorMessage = "Unable to retrieve your location.";
        
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access was denied. Please allow location access to use this feature.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "The request to get your location timed out.";
            break;
        }
        
        toast({
          title: "Location Error",
          description: errorMessage,
          variant: "destructive"
        });
        
        setIsLocating(false);
      }
    );
  };
  
  return (
    <div className="min-h-screen pb-20 pt-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hospitals Near Me</h1>
          <p className="text-muted-foreground mb-6">
            Find healthcare facilities closest to your current location for immediate medical attention.
          </p>
          
          <button 
            onClick={handleGetLocation}
            disabled={isLocating}
            className="btn-primary flex items-center mx-auto"
          >
            {isLocating ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Detecting location...
              </>
            ) : (
              <>
                <MapPin className="w-5 h-5 mr-2" />
                Use my current location
              </>
            )}
          </button>
        </motion.div>
        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-medical-500 animate-spin mb-4" />
            <p className="text-muted-foreground">Finding hospitals near you...</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6">Nearby Hospitals</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyHospitals.map((hospital, index) => (
                <motion.div
                  key={hospital.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <HospitalCard hospital={hospital} />
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NearMe;
