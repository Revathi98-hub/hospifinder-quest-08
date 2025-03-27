
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Loader2, Navigation } from "lucide-react";
import HospitalCard from "@/components/HospitalCard";
import { hospitals, getHospitalsByLocation } from "@/data/hospitalData";
import { toast } from "@/components/ui/use-toast";
import { Slider } from "@/components/ui/slider";

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
        const { latitude, longitude } = position.coords;
        setUserCoordinates({ lat: latitude, lng: longitude });
        
        // Filter hospitals by location radius
        const locatedHospitals = getHospitalsByLocation(latitude, longitude, searchRadius);
        
        setNearbyHospitals(locatedHospitals);
        setIsLocating(false);
        
        toast({
          title: "Location detected",
          description: `Showing hospitals within ${searchRadius} km of your location.`,
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
                <Navigation className="w-5 h-5 mr-2" />
                Use my current location
              </>
            )}
          </button>
          
          {userCoordinates && (
            <div className="mt-6 glass p-5 rounded-xl">
              <h3 className="font-medium mb-3">Search Radius: {searchRadius} km</h3>
              <Slider
                defaultValue={[searchRadius]}
                min={1}
                max={20}
                step={1}
                onValueChange={handleRadiusChange}
                className="max-w-xs mx-auto"
              />
            </div>
          )}
        </motion.div>
        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-medical-500 animate-spin mb-4" />
            <p className="text-muted-foreground">Finding hospitals near you...</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Nearby Hospitals</h2>
              {userCoordinates && (
                <p className="text-sm text-muted-foreground">
                  {nearbyHospitals.length} hospitals within {searchRadius} km
                </p>
              )}
            </div>
            
            {nearbyHospitals.length > 0 ? (
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
            ) : (
              <div className="text-center py-20">
                <MapPin className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-medium mb-2">No hospitals found in this area</h3>
                <p className="text-muted-foreground">
                  Try increasing your search radius or try a different location.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NearMe;
