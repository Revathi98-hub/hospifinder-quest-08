
import { Loader2 } from "lucide-react";

const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Loader2 className="w-10 h-10 text-medical-500 animate-spin mb-4" />
      <p className="text-muted-foreground">Finding hospitals near you...</p>
    </div>
  );
};

export default LoadingState;
