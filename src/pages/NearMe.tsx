
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hospitals } from "@/data/hospitalData";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

// Import our components
import RadiusSelector from "@/components/location/RadiusSelector";
import HospitalList from "@/components/location/HospitalList";
import LoadingState from "@/components/location/LoadingState";
import SearchBox from "@/components/SearchBox";

const NearMe = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nearbyHospitals, setNearbyHospitals] = useState(hospitals);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchRadius, setSearchRadius] = useState<number>(5);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Simulate loading state for demo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (location: string, state?: string, district?: string, hospitalType?: string) => {
    // Filter hospitals based on search criteria
    let filteredHospitals = hospitals;
    
    if (hospitalType) {
      filteredHospitals = filteredHospitals.filter(hospital => 
        hospital.hospitalType?.toLowerCase() === hospitalType.toLowerCase()
      );
    }
    
    // For state and district, we'll search within the address field
    if (state) {
      filteredHospitals = filteredHospitals.filter(hospital => 
        hospital.address.toLowerCase().includes(state.toLowerCase())
      );
      
      if (district) {
        filteredHospitals = filteredHospitals.filter(hospital => 
          hospital.address.toLowerCase().includes(district.toLowerCase())
        );
      }
    }
    
    // If a general location is provided
    if (location && !state && !district) {
      filteredHospitals = filteredHospitals.filter(hospital => 
        hospital.address.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    setNearbyHospitals(filteredHospitals);
    
    toast({
      title: "Search complete",
      description: `Found ${filteredHospitals.length} hospitals based on your criteria.`,
    });
  };

  const handleRadiusChange = (value: number[]) => {
    const newRadius = value[0];
    setSearchRadius(newRadius);
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
            Find healthcare facilities closest to your location for immediate medical attention.
          </p>
          
          <SearchBox 
            className="shadow-lg mb-6"
            variant="large"
            onSearch={handleSearch}
          />
          
          <RadiusSelector 
            searchRadius={searchRadius}
            onRadiusChange={handleRadiusChange}
          />
        </motion.div>
        
        {isLoading ? (
          <LoadingState />
        ) : (
          <HospitalList 
            hospitals={nearbyHospitals}
            isLoaded={isLoaded}
            userCoordinates={null}
            searchRadius={searchRadius}
          />
        )}
      </div>
    </div>
  );
};

export default NearMe;
