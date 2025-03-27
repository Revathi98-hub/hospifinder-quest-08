
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Building } from "lucide-react";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getAllStates, getDistrictsByState } from "@/data/locationData";

interface SearchBoxProps {
  className?: string;
  variant?: "large" | "normal";
  onSearch?: (query: string, location: string, state?: string, district?: string) => void;
  initialState?: string;
  initialDistrict?: string;
}

const SearchBox = ({ 
  className, 
  variant = "normal",
  onSearch,
  initialState,
  initialDistrict
}: SearchBoxProps) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [selectedState, setSelectedState] = useState<string>(initialState || "");
  const [selectedDistrict, setSelectedDistrict] = useState<string>(initialDistrict || "");
  const [availableDistricts, setAvailableDistricts] = useState<string[]>([]);
  
  const navigate = useNavigate();
  const states = getAllStates();

  // Update districts when state changes
  useEffect(() => {
    if (selectedState) {
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
    
    // Format location string based on state and district
    let locationString = location;
    if (selectedDistrict && selectedState) {
      locationString = `${selectedDistrict}, ${selectedState}`;
    } else if (selectedState) {
      locationString = selectedState;
    }
    
    if (onSearch) {
      onSearch(query, locationString, selectedState, selectedDistrict);
    } else {
      const searchParams = new URLSearchParams();
      if (query) searchParams.append("query", query);
      if (locationString) searchParams.append("location", locationString);
      if (selectedState) searchParams.append("state", selectedState);
      if (selectedDistrict) searchParams.append("district", selectedDistrict);
      
      navigate(`/search?${searchParams.toString()}`);
    }
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
        <div className={cn(
          "flex items-center gap-2 rounded-xl bg-background px-3 py-2",
          variant === "large" && "py-3"
        )}>
          <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <input
            type="text"
            placeholder="Hospital name or specialty"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={cn(
              "bg-transparent border-0 outline-none placeholder:text-muted-foreground w-full",
              variant === "large" && "text-lg"
            )}
          />
        </div>
        
        <div className={cn(
          "flex items-center gap-2 rounded-xl bg-background px-3 py-2",
          variant === "large" && "py-3"
        )}>
          <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <input
            type="text"
            placeholder="Location (city, area)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={cn(
              "bg-transparent border-0 outline-none placeholder:text-muted-foreground w-full",
              variant === "large" && "text-lg"
            )}
          />
        </div>
        
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
              <SelectItem value="">All States</SelectItem>
              {states.map(state => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {selectedState && (
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
                <SelectItem value="">All Districts</SelectItem>
                {availableDistricts.map(district => (
                  <SelectItem key={district} value={district}>
                    {district}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
        
        <button 
          type="submit"
          className={cn(
            "btn-primary",
            variant === "large" ? "px-8 py-3 text-lg" : "px-5 py-2"
          )}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
