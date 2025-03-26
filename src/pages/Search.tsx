
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, MapPin } from "lucide-react";
import SearchBox from "@/components/SearchBox";
import HospitalCard from "@/components/HospitalCard";
import { searchHospitals, getAllSpecialties } from "@/data/hospitalData";
import { cn } from "@/lib/utils";

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("query") || "";
  const initialLocation = queryParams.get("location") || "";
  
  const [query, setQuery] = useState(initialQuery);
  const [locationQuery, setLocationQuery] = useState(initialLocation);
  const [results, setResults] = useState(searchHospitals(initialQuery, initialLocation));
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const allSpecialties = getAllSpecialties();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Update search when URL parameters change
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newQuery = queryParams.get("query") || "";
    const newLocation = queryParams.get("location") || "";
    
    setQuery(newQuery);
    setLocationQuery(newLocation);
    
    let filtered = searchHospitals(newQuery, newLocation);
    
    // Apply specialty filter if any are selected
    if (selectedSpecialties.length > 0) {
      filtered = filtered.filter(hospital => 
        hospital.specialty?.some(spec => selectedSpecialties.includes(spec))
      );
    }
    
    setResults(filtered);
  }, [location.search, selectedSpecialties]);
  
  const handleSearch = (newQuery: string, newLocation: string) => {
    setQuery(newQuery);
    setLocationQuery(newLocation);
    
    // Update URL with search parameters
    const searchParams = new URLSearchParams();
    if (newQuery) searchParams.append("query", newQuery);
    if (newLocation) searchParams.append("location", newLocation);
    
    window.history.pushState({}, "", `${location.pathname}?${searchParams.toString()}`);
    
    // Perform search
    setResults(searchHospitals(newQuery, newLocation));
  };
  
  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };
  
  return (
    <div className="min-h-screen pb-20 pt-24">
      <div className="container-custom">
        <div className="sticky top-20 z-30 pt-6 pb-4 bg-background">
          <SearchBox 
            onSearch={handleSearch}
            className="mb-6 shadow-sm" 
          />
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 btn-secondary"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                {selectedSpecialties.length > 0 && (
                  <span className="ml-2 w-5 h-5 rounded-full bg-medical-500 text-white text-xs flex items-center justify-center">
                    {selectedSpecialties.length}
                  </span>
                )}
              </button>
              
              {selectedSpecialties.length > 0 && (
                <button
                  onClick={() => setSelectedSpecialties([])}
                  className="ml-4 text-sm text-medical-600 hover:text-medical-700 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
            
            <p className="text-muted-foreground">
              {results.length} {results.length === 1 ? "hospital" : "hospitals"} found
            </p>
          </div>
          
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <div className="border rounded-lg p-4 bg-background/80 backdrop-blur-sm">
                  <h3 className="font-medium mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {allSpecialties.map(specialty => (
                      <button
                        key={specialty}
                        onClick={() => toggleSpecialty(specialty)}
                        className={cn(
                          "px-3 py-1 rounded-full text-sm transition-colors",
                          selectedSpecialties.includes(specialty)
                            ? "bg-medical-500 text-white"
                            : "bg-secondary text-foreground hover:bg-medical-100"
                        )}
                      >
                        {specialty}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="border-t mt-4 pt-6">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((hospital, index) => (
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-medium mb-2">No hospitals found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or removing some filters.
                </p>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
