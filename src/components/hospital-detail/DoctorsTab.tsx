
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Doctor {
  name: string;
  specialty: string;
  rating: number;
  image: string;
}

interface DoctorsTabProps {
  doctors: Doctor[];
}

const DoctorsTab = ({ doctors }: DoctorsTabProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Medical Staff</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor, index) => (
          <motion.div 
            key={index} 
            className="glass p-6 rounded-xl"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-4">
              <Avatar className="w-20 h-20 border-2 border-medical-100">
                <AvatarImage src={doctor.image} alt={doctor.name} />
                <AvatarFallback className="bg-medical-100 text-medical-600 text-lg font-medium">
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
            <h3 className="font-semibold text-lg">{doctor.name}</h3>
            <p className="text-muted-foreground mb-2">{doctor.specialty}</p>
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{doctor.rating}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsTab;
