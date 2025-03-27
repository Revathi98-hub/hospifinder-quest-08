
import { Star, MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

export interface Hospital {
  id: string;
  name: string;
  address: string;
  distance?: string;
  image: string;
  rating: number;
  ratingCount: number;
  open: boolean;
  openHours: string;
  phone: string;
  specialty?: string[];
  hospitalType?: "government" | "private"; // Added hospital type
}

interface HospitalCardProps {
  hospital: Hospital;
  className?: string;
}

const HospitalCard = ({ hospital, className }: HospitalCardProps) => {
  const [imageError, setImageError] = useState(false);
  
  // Fallback hospital images by type
  const fallbackImage = hospital.hospitalType === "government" 
    ? "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    : "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80";

  return (
    <Link 
      to={`/hospital/${hospital.id}`}
      className={cn(
        "hospital-card flex flex-col h-full animate-fade-in",
        className
      )}
    >
      <div className="relative mb-4 rounded-lg overflow-hidden">
        <img 
          src={imageError ? fallbackImage : hospital.image} 
          alt={hospital.name}
          className="w-full h-40 object-cover transition-transform duration-700 hover:scale-110"
          onError={() => setImageError(true)}
        />
        {hospital.distance && (
          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium">
            {hospital.distance}
          </span>
        )}
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-semibold text-lg leading-tight">{hospital.name}</h3>
          <div className="flex items-center space-x-1 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{hospital.rating}</span>
            <span className="text-muted-foreground">({hospital.ratingCount})</span>
          </div>
        </div>
        
        {hospital.specialty && (
          <div className="flex flex-wrap gap-1 mb-2">
            {hospital.specialty.map((spec) => (
              <span 
                key={spec} 
                className="bg-medical-50 text-medical-600 text-xs px-2 py-0.5 rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-start space-x-2 text-sm mb-1 text-muted-foreground">
          <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{hospital.address}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm mb-1 text-muted-foreground mt-auto">
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span className={hospital.open ? "text-green-600" : "text-red-500"}>
            {hospital.open ? "Open" : "Closed"} · {hospital.openHours}
          </span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>{hospital.phone}</span>
        </div>
      </div>
    </Link>
  );
};

export default HospitalCard;
