
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Building, Shield, Heart, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { getAllStates, getDistrictsByState } from "@/data/locationData";

interface SearchBoxProps {
  className?: string;
  variant?: "large" | "normal";
  onSearch?: (location: string, state?: string, district?: string, hospitalType?: string) => void;
  initialState?: string;
  initialDistrict?: string;
  initialHospitalType?: string;
}

const SearchBox = ({ 
  className, 
  variant = "normal",
  onSearch,
  initialState,
  initialDistrict,
  initialHospitalType
}: SearchBoxProps) => {
  const [selectedState, setSelectedState] = useState<string>(initialState || "");
  const [selectedDistrict, setSelectedDistrict] = useState<string>(initialDistrict || "");
  const [hospitalType, setHospitalType] = useState<string>(initialHospitalType || "");
  const [availableDistricts, setAvailableDistricts] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const navigate = useNavigate();
  const states = getAllStates();

  // Update districts when state changes
  useEffect(() => {
    if (selectedState && selectedState !== "all_states") {
      setAvailableDistricts(getDistrictsByState(selectedState));
      // Reset district if state changes
      if (!initialDistrict) {
        setSelectedDistrict("");
      }
    } else {
      setAvailableDistricts([]);
      setSelectedDistrict("");
    }
  }, [selectedState, initialDistrict]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Format location string based on state and district
    let locationString = "";
    if (selectedDistrict && selectedDistrict !== "all_districts" && selectedState && selectedState !== "all_states") {
      locationString = `${selectedDistrict}, ${selectedState}`;
    } else if (selectedState && selectedState !== "all_states") {
      locationString = selectedState;
    }
    
    // Ensure we're using the actual state and district values, not "all_states" or "all_districts"
    const stateParam = selectedState === "all_states" ? "" : selectedState;
    const districtParam = selectedDistrict === "all_districts" ? "" : selectedDistrict;
    
    setTimeout(() => {
      if (onSearch) {
        onSearch(locationString, stateParam, districtParam, hospitalType);
      } else {
        const searchParams = new URLSearchParams();
        if (locationString) searchParams.append("location", locationString);
        if (stateParam) searchParams.append("state", stateParam);
        if (districtParam) searchParams.append("district", districtParam);
        if (hospitalType) searchParams.append("hospitalType", hospitalType);
        
        navigate(`/search?${searchParams.toString()}`);
      }
      setIsSearching(false);
    }, 500); // Small delay for visual feedback
  };

  return (
    <form 
      onSubmit={handleSearch}
      className={cn(
        "glass rounded-2xl transition-all overflow-hidden",
        variant === "large" ? "p-3 md:p-4" : "p-2",
        className
      )}
    >
      <div className="flex flex-col md:flex-row gap-2">
        <Select value={selectedState} onValueChange={setSelectedState}>
          <SelectTrigger 
            className={cn(
              "rounded-xl bg-background border-0",
              variant === "large" && "text-lg"
            )}
          >
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <SelectValue placeholder="Select state" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all_states">All States</SelectItem>
            {states.map(state => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {selectedState && selectedState !== "all_states" && (
          <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
            <SelectTrigger 
              className={cn(
                "rounded-xl bg-background border-0",
                variant === "large" && "text-lg"
              )}
            >
              <SelectValue placeholder="Select district" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all_districts">All Districts</SelectItem>
              {availableDistricts.map(district => (
                <SelectItem key={district} value={district}>
                  {district}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        
        <Button 
          type="submit"
          disabled={isSearching}
          variant="medical"
          className={cn(
            "relative overflow-hidden transition-all duration-300",
            variant === "large" ? "px-8 py-3 text-lg" : "px-5 py-2",
            "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md"
          )}
        >
          <div className={cn(
            "flex items-center justify-center gap-2",
            isSearching && "animate-pulse"
          )}>
            <Search className={cn(
              "w-5 h-5 transition-transform",
              isSearching ? "animate-spin" : "group-hover:scale-110"
            )} />
            {isSearching ? "Searching..." : "Search"}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 opacity-0 hover:opacity-100 animate-[shimmer_1.5s_infinite] pointer-events-none" style={{ 
            backgroundSize: "200% 100%",
            animation: "shimmer 2s infinite linear",
          }}></div>
        </Button>
      </div>
      
      {/* Hospital Type Filter */}
      {(selectedState || selectedDistrict) && (
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Hospital Type:</span>
          <ToggleGroup 
            type="single" 
            value={hospitalType} 
            onValueChange={(value) => setHospitalType(value)}
            className="justify-start"
          >
            <ToggleGroupItem value="government" aria-label="Government Hospitals">
              <Shield className="mr-1" size={16} />
              Government
            </ToggleGroupItem>
            <ToggleGroupItem value="private" aria-label="Private Hospitals">
              <Heart className="mr-1" size={16} />
              Private
            </ToggleGroupItem>
            {hospitalType && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setHospitalType("")}
                className="h-9 text-xs"
              >
                Clear
              </Button>
            )}
          </ToggleGroup>
        </div>
      )}
    </form>
  );
};

export default SearchBox;
