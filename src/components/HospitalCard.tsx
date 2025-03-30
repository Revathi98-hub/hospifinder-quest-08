import { Star, MapPin, Clock, Phone, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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

// Collection of additional hospital images for variety
const additionalHospitalImages = [
  "https://thumbs.dreamstime.com/z/hospital-reception-waiting-room-chairs-building-centre-92207521.jpg",
  "https://admissionxpert.in/wp-content/uploads/2020/11/Operation-Theater-Technology-img-min.jpg",
  "https://images.onlymyhealth.com/imported/images/2021/June/16_Jun_2021/HomeICU_big.jpg",
  "https://www.hksh-hospital.com/sites/default/files/website-media/images/accommodation/paediatric-ward/img02.JPG",
  "https://nsmot.com/wp-content/uploads/2019/05/Modern-modular-operation-theatre-2-5030x2515.jpg",
  "https://www.mjpaia.com/wp-content/uploads/2012/06/SVMC-ER-MainOperatingRoom-e1338921334793-940x626.jpg",
  "https://cdnassets.hw.net/3c/59/2e8a2f6740fcbfe830881f80b596/c82bbba2-6249-4cd8-a66a-502941a4eeb6.jpg",
  "https://thumbs.dreamstime.com/z/modern-style-hospital-building-straight-lines-concrete-facing-30588884.jpg",
  "https://c8.alamy.com/comp/RATKP4/regions-hospital-building-showing-the-emergency-room-entrance-in-front-st-paul-minnesota-mn-usa-RATKP4.jpg"
];

const HospitalCard = ({ hospital, className }: HospitalCardProps) => {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  
  // Get a random image based on hospital ID to ensure consistency
  const getRandomImage = () => {
    // Use the hospital id to generate a consistent index for the same hospital
    const idSum = hospital.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = idSum % additionalHospitalImages.length;
    return additionalHospitalImages[index];
  };
  
  // Primary fallback uses hospital type
  const typeFallbackImage = hospital.hospitalType === "government" 
    ? "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    : "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80";
  
  // Use a multi-layer fallback approach for maximum image display reliability
  const handleImageError = () => {
    setImageError(true);
  };

  // The image to display with fallback strategies
  const displayImage = imageError ? (getRandomImage() || typeFallbackImage) : hospital.image;

  const handleBookAppointment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent navigation to detail page
    // Use navigate instead of direct window.location assignment
    navigate(`/hospital/${hospital.id}?booking=true`);
  };

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
          src={displayImage} 
          alt={hospital.name}
          className="w-full h-40 object-cover transition-transform duration-700 hover:scale-110"
          onError={handleImageError}
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
        
        <div className="flex items-center space-x-2 text-sm mb-1 text-muted-foreground">
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span className={hospital.open ? "text-green-600" : "text-red-500"}>
            {hospital.open ? "Open" : "Closed"} · {hospital.openHours}
          </span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>{hospital.phone}</span>
        </div>
        
        <Button 
          className="mt-auto w-full bg-medical-600 hover:bg-medical-700 text-white"
          size="sm"
          onClick={handleBookAppointment}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book Appointment
        </Button>
      </div>
    </Link>
  );
};

export default HospitalCard;
