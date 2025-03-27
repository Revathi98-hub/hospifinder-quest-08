import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, MapPin, Building, Shield, Heart } from "lucide-react";
import SearchBox from "@/components/SearchBox";
import HospitalCard from "@/components/HospitalCard";
import { searchHospitals, getAllSpecialties } from "@/data/hospitalData";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { getAllStates, getDistrictsByState } from "@/data/locationData";
import { Toggle } from "@/components/ui/toggle";

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("query") || "";
  const initialLocation = queryParams.get("location") || "";
  const initialState = queryParams.get("state") || "";
  const initialDistrict = queryParams.get("district") || "";
  const initialHospitalType = queryParams.get("hospitalType") || "";
  
  const [query, setQuery] = useState(initialQuery);
  const [locationQuery, setLocationQuery] = useState(initialLocation);
  const [selectedState, setSelectedState] = useState(initialState);
  const [selectedDistrict, setSelectedDistrict] = useState(initialDistrict);
  const [hospitalType, setHospitalType] = useState(initialHospitalType);
  const [results, setResults] = useState(searchHospitals(initialQuery, initialLocation, initialState, initialDistrict));
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [isStatesFilterOpen, setIsStatesFilterOpen] = useState(false);
  const [selectedStates, setSelectedStates] = useState<string[]>(initialState ? [initialState] : []);
  const [selectedDistricts, setSelectedDistricts] = useState<{[state: string]: string[]}>({});
  const [isLoaded, setIsLoaded] = useState(false);
  
  const allSpecialties = getAllSpecialties();
  const allStates = getAllStates();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Update search when URL parameters change
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newQuery = queryParams.get("query") || "";
    const newLocation = queryParams.get("location") || "";
    const newState = queryParams.get("state") || "";
    const newDistrict = queryParams.get("district") || "";
    const newHospitalType = queryParams.get("hospitalType") || "";
    
    setQuery(newQuery);
    setLocationQuery(newLocation);
    setSelectedState(newState);
    setSelectedDistrict(newDistrict);
    setHospitalType(newHospitalType);
    
    if (newState && !selectedStates.includes(newState)) {
      setSelectedStates(prev => [...prev, newState]);
    }
    
    if (newState && newDistrict) {
      setSelectedDistricts(prev => ({
        ...prev,
        [newState]: [...(prev[newState] || []), newDistrict]
      }));
    }
    
    let filtered = searchHospitals(newQuery, newLocation, newState, newDistrict);
    
    // Apply specialty filter if any are selected
    if (selectedSpecialties.length > 0) {
      filtered = filtered.filter(hospital => 
        hospital.specialty?.some(spec => selectedSpecialties.includes(spec))
      );
    }
    
    // Apply hospital type filter
    if (newHospitalType) {
      filtered = filtered.filter(hospital => {
        // This is a simplified check; in a real app, you'd have a proper field for this
        const hospitalName = hospital.name.toLowerCase();
        if (newHospitalType === "government") {
          return hospitalName.includes("government") || 
                 hospitalName.includes("general hospital") ||
                 hospitalName.includes("medical college") ||
                 hospitalName.includes("aiims");
        } else if (newHospitalType === "private") {
          return !hospitalName.includes("government") && 
                 !hospitalName.includes("general hospital") &&
                 !hospitalName.includes("medical college") &&
                 !hospitalName.includes("aiims");
        }
        return true;
      });
    }
    
    setResults(filtered);
  }, [location.search, selectedSpecialties]);
  
  const handleSearch = (newLocation: string, newState?: string, newDistrict?: string, newHospitalType?: string) => {
    setLocationQuery(newLocation);
    setSelectedState(newState || "");
    setSelectedDistrict(newDistrict || "");
    setHospitalType(newHospitalType || "");
    
    // Handle "all_states" value
    if (newState === "all_states") {
      newState = "";
    }
    
    // Handle "all_districts" value
    if (newDistrict === "all_districts") {
      newDistrict = "";
    }
    
    // Update URL with search parameters
    const searchParams = new URLSearchParams();
    if (query) searchParams.append("query", query);
    if (newLocation) searchParams.append("location", newLocation);
    if (newState) searchParams.append("state", newState);
    if (newDistrict) searchParams.append("district", newDistrict);
    if (newHospitalType) searchParams.append("hospitalType", newHospitalType);
    
    window.history.pushState({}, "", `${location.pathname}?${searchParams.toString()}`);
    
    // Perform search
    let filtered = searchHospitals(query, newLocation, newState, newDistrict);
    
    // Apply hospital type filter
    if (newHospitalType) {
      filtered = filtered.filter(hospital => {
        // This is a simplified check; in a real app, you'd have a proper field for this
        const hospitalName = hospital.name.toLowerCase();
        if (newHospitalType === "government") {
          return hospitalName.includes("government") || 
                 hospitalName.includes("general hospital") ||
                 hospitalName.includes("medical college") ||
                 hospitalName.includes("aiims");
        } else if (newHospitalType === "private") {
          return !hospitalName.includes("government") && 
                 !hospitalName.includes("general hospital") &&
                 !hospitalName.includes("medical college") &&
                 !hospitalName.includes("aiims");
        }
        return true;
      });
    }
    
    setResults(filtered);
  };
  
  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };
  
  const toggleState = (state: string) => {
    setSelectedStates(prev => {
      if (prev.includes(state)) {
        // Remove state and its districts
        const newStates = prev.filter(s => s !== state);
        const newDistricts = { ...selectedDistricts };
        delete newDistricts[state];
        setSelectedDistricts(newDistricts);
        return newStates;
      } else {
        return [...prev, state];
      }
    });
  };
  
  const toggleDistrict = (state: string, district: string) => {
    setSelectedDistricts(prev => {
      const stateDistricts = prev[state] || [];
      
      if (stateDistricts.includes(district)) {
        return {
          ...prev,
          [state]: stateDistricts.filter(d => d !== district)
        };
      } else {
        return {
          ...prev,
          [state]: [...stateDistricts, district]
        };
      }
    });
  };
  
  // Apply filters (states, districts, and specialties)
  useEffect(() => {
    // Skip on initial load
    if (!isLoaded) return;
    
    let filtered = searchHospitals(query, locationQuery);
    
    // Filter by selected states and districts
    if (selectedStates.length > 0) {
      filtered = filtered.filter(hospital => {
        const hospitalState = hospital.address.split(', ').pop();
        
        // Check if hospital's state is in selected states
        if (!hospitalState || !selectedStates.some(state => hospitalState.includes(state))) {
          return false;
        }
        
        // If state has selected districts, check those too
        const state = selectedStates.find(state => hospitalState.includes(state));
        if (state && selectedDistricts[state]?.length > 0) {
          const hospitalDistrict = hospital.address.split(', ')[0];
          return selectedDistricts[state].some(district => 
            hospitalDistrict.includes(district)
          );
        }
        
        return true;
      });
    }
    
    // Apply specialty filter
    if (selectedSpecialties.length > 0) {
      filtered = filtered.filter(hospital => 
        hospital.specialty?.some(spec => selectedSpecialties.includes(spec))
      );
    }
    
    // Apply hospital type filter
    if (hospitalType) {
      filtered = filtered.filter(hospital => {
        // This is a simplified check; in a real app, you'd have a proper field for this
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
      });
    }
    
    setResults(filtered);
  }, [selectedStates, selectedDistricts, selectedSpecialties, hospitalType, isLoaded]);
  
  return (
    <div className="min-h-screen pb-20 pt-24">
      <div className="container-custom">
        <div className="sticky top-20 z-30 pt-6 pb-4 bg-background">
          <SearchBox 
            onSearch={handleSearch}
            className="mb-6 shadow-sm"
            initialState={selectedState}
            initialDistrict={selectedDistrict}
            initialHospitalType={hospitalType}
          />
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 btn-secondary"
              >
                <Filter className="w-4 h-4" />
                <span>Specialties</span>
                {selectedSpecialties.length > 0 && (
                  <span className="ml-2 w-5 h-5 rounded-full bg-medical-500 text-white text-xs flex items-center justify-center">
                    {selectedSpecialties.length}
                  </span>
                )}
              </button>
              
              <button
                onClick={() => setIsStatesFilterOpen(!isStatesFilterOpen)}
                className="flex items-center space-x-2 btn-secondary"
              >
                <Building className="w-4 h-4" />
                <span>States & Districts</span>
                {selectedStates.length > 0 && (
                  <span className="ml-2 w-5 h-5 rounded-full bg-medical-500 text-white text-xs flex items-center justify-center">
                    {selectedStates.length}
                  </span>
                )}
              </button>
              
              <div className="flex gap-2">
                <Toggle 
                  pressed={hospitalType === "government"} 
                  onPressedChange={() => {
                    const newType = hospitalType === "government" ? "" : "government";
                    setHospitalType(newType);
                    handleSearch(locationQuery, selectedState, selectedDistrict, newType);
                  }}
                  className="px-3 py-1 h-auto rounded-full text-xs border"
                  aria-label="Government Hospitals"
                >
                  <Shield className="w-3 h-3 mr-1" />
                  Government
                </Toggle>
                
                <Toggle 
                  pressed={hospitalType === "private"} 
                  onPressedChange={() => {
                    const newType = hospitalType === "private" ? "" : "private";
                    setHospitalType(newType);
                    handleSearch(locationQuery, selectedState, selectedDistrict, newType);
                  }}
                  className="px-3 py-1 h-auto rounded-full text-xs border"
                  aria-label="Private Hospitals"
                >
                  <Heart className="w-3 h-3 mr-1" />
                  Private
                </Toggle>
              </div>
              
              {(selectedSpecialties.length > 0 || selectedStates.length > 0 || hospitalType) && (
                <button
                  onClick={() => {
                    setSelectedSpecialties([]);
                    setSelectedStates([]);
                    setSelectedDistricts({});
                    setHospitalType("");
                    handleSearch(locationQuery, selectedState, selectedDistrict, "");
                  }}
                  className="text-sm text-medical-600 hover:text-medical-700 transition-colors"
                >
                  Clear all filters
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
            
            {isStatesFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <div className="border rounded-lg p-4 bg-background/80 backdrop-blur-sm">
                  <h3 className="font-medium mb-3">States & Districts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allStates.map(state => (
                      <div key={state} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id={`state-${state}`} 
                            checked={selectedStates.includes(state)}
                            onCheckedChange={() => toggleState(state)}
                          />
                          <label 
                            htmlFor={`state-${state}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {state}
                          </label>
                        </div>
                        
                        {selectedStates.includes(state) && (
                          <div className="pl-6 space-y-1 max-h-32 overflow-y-auto">
                            {getDistrictsByState(state).map(district => (
                              <div key={district} className="flex items-center space-x-2">
                                <Checkbox 
                                  id={`district-${state}-${district}`} 
                                  checked={(selectedDistricts[state] || []).includes(district)}
                                  onCheckedChange={() => toggleDistrict(state, district)}
                                />
                                <label 
                                  htmlFor={`district-${state}-${district}`}
                                  className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {district}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
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
