
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface RadiusSelectorProps {
  searchRadius: number;
  onRadiusChange: (value: number[]) => void;
}

const RadiusSelector = ({ searchRadius, onRadiusChange }: RadiusSelectorProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-8 glass p-6 rounded-xl shadow-sm"
    >
      <h3 className="font-medium mb-3 flex items-center justify-center gap-2">
        <Info className="h-4 w-4 text-medical-500" />
        Search Radius: {searchRadius} km
      </h3>
      <Slider
        defaultValue={[searchRadius]}
        value={[searchRadius]}
        min={1}
        max={20}
        step={1}
        onValueChange={onRadiusChange}
        className="max-w-xs mx-auto"
      />
    </motion.div>
  );
};

export default RadiusSelector;
