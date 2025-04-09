
import { Users, Star } from "lucide-react";

interface HospitalStatsProps {
  appointmentCount: number;
  reviewCount: number;
}

const HospitalStats = ({ appointmentCount, reviewCount }: HospitalStatsProps) => {
  return (
    <div className="mb-6 flex gap-4">
      <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3 flex-1">
        <div className="bg-blue-100 p-2 rounded-full">
          <Users className="text-blue-600 h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Total Appointments</p>
          <p className="text-xl font-semibold">{appointmentCount}</p>
        </div>
      </div>
      
      <div className="bg-amber-50 p-4 rounded-lg flex items-center gap-3 flex-1">
        <div className="bg-amber-100 p-2 rounded-full">
          <Star className="text-amber-600 h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Total Reviews</p>
          <p className="text-xl font-semibold">{reviewCount}</p>
        </div>
      </div>
    </div>
  );
};

export default HospitalStats;
