
import { motion } from "framer-motion";
import HospitalCard from "@/components/HospitalCard";

interface SearchResultsSectionProps {
  searchResults: any[];
  hasSearched: boolean;
}

const SearchResultsSection = ({ searchResults, hasSearched }: SearchResultsSectionProps) => {
  if (!hasSearched) {
    return null;
  }

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50/30">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold mb-2 relative">
            <span className="relative inline-block">
              Search Results
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400 rounded-full"></span>
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl">
            Found {searchResults.length} hospitals matching your criteria
          </p>
        </div>
        
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map((hospital, index) => (
              <motion.div
                key={hospital.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="shadow-md rounded-xl overflow-hidden"
              >
                <HospitalCard hospital={hospital} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-muted/30 rounded-2xl">
            <h3 className="text-xl font-medium mb-2">No hospitals found matching your criteria</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Try adjusting your search parameters or try a different location.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResultsSection;
