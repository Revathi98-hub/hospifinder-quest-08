
import { useState, useEffect } from "react";
import { hospitals, searchHospitals } from "@/data/hospitalData";
import { getAllStates } from "@/data/locationData";
import HeroSection from "@/components/home/HeroSection";
import SearchResultsSection from "@/components/home/SearchResultsSection";
import FeaturedHospitalsSection from "@/components/home/FeaturedHospitalsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Show more featured hospitals
  const featuredHospitals = hospitals.slice(0, 6);

  const handleSearch = (location: string, state?: string, district?: string, hospitalType?: string) => {
    // Search for hospitals based on criteria
    console.log("Searching for hospitals in:", location, "state:", state, "district:", district, "type:", hospitalType);
    
    const results = searchHospitals(
      "", // query
      location,
      state,
      district
    );
    
    // Filter by hospital type if specified
    const filteredResults = hospitalType 
      ? results.filter(hospital => {
          const hospitalName = hospital.name.toLowerCase();
          if (hospitalType === "government") {
            return hospitalName.includes("government") || 
                   hospitalName.includes("general hospital") ||
                   hospitalName.includes("medical college") ||
                   hospitalName.includes("aiims");
          } else if (hospitalType === "private") {
            return !hospitalName.includes("government") && 
                   !hospitalName.includes("general hospital") &&
                   !hospitalName.includes("medical college") &&
                   !hospitalName.includes("aiims");
          }
          return true;
        })
      : results;
    
    setSearchResults(filteredResults);
    setSelectedState(state || "");
    setSelectedDistrict(district || "");
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen pb-20">
      <HeroSection 
        isLoaded={isLoaded} 
        onSearch={handleSearch} 
      />
      
      <SearchResultsSection 
        searchResults={searchResults} 
        hasSearched={hasSearched} 
      />
      
      <FeaturedHospitalsSection 
        featuredHospitals={featuredHospitals} 
        isLoaded={isLoaded} 
      />
      
      <HowItWorksSection 
        isLoaded={isLoaded} 
      />
    </div>
  );
};

export default Index;
