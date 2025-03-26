
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBoxProps {
  className?: string;
  variant?: "large" | "normal";
  onSearch?: (query: string, location: string) => void;
}

const SearchBox = ({ 
  className, 
  variant = "normal",
  onSearch 
}: SearchBoxProps) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onSearch) {
      onSearch(query, location);
    } else {
      const searchParams = new URLSearchParams();
      if (query) searchParams.append("query", query);
      if (location) searchParams.append("location", location);
      
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
            placeholder="Location (e.g., Visakhapatnam, Hyderabad, Delhi)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={cn(
              "bg-transparent border-0 outline-none placeholder:text-muted-foreground w-full",
              variant === "large" && "text-lg"
            )}
          />
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
