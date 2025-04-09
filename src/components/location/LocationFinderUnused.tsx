
import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface LocationFinderProps {
  onLocationDetected: (lat: number, lng: number) => void;
  isLocating: boolean;
  setIsLocating: (value: boolean) => void;
}

const LocationFinder = ({ 
  onLocationDetected, 
  isLocating,
  setIsLocating 
}: LocationFinderProps) => {
  
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
        onLocationDetected(latitude, longitude);
        setIsLocating(false);
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
    <Button 
      onClick={handleGetLocation}
      disabled={isLocating}
      className="mx-auto bg-medical-600 hover:bg-medical-700 text-white shadow-md transition-all duration-200"
      size="lg"
    >
      {isLocating ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Finding your location...
        </>
      ) : (
        <>
          <Navigation className="mr-2 h-5 w-5" />
          Use my current location
        </>
      )}
    </Button>
  );
};

export default LocationFinder;
