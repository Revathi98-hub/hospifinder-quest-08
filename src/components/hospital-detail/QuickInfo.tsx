
import { Calendar, LucideIcon, Phone, CalendarClock, Building2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DetailItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

interface QuickInfoProps {
  hospital: {
    phone: string;
  };
  onBookAppointment: () => void;
}

const DetailItem = ({ icon: Icon, title, value }: DetailItemProps) => (
  <div className="flex space-x-3">
    <div className="w-10 h-10 rounded-full bg-medical-50 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-medical-600" />
    </div>
    <div>
      <h4 className="text-sm text-muted-foreground">{title}</h4>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

const QuickInfo = ({ hospital, onBookAppointment }: QuickInfoProps) => {
  return (
    <div className="glass rounded-xl p-6 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-xl font-semibold mb-4 sm:mb-0">Quick Information</h2>
        
        <Button 
          className="bg-medical-600 hover:bg-medical-700 text-white"
          onClick={onBookAppointment}
        >
          <Calendar className="mr-2 h-4 w-4" />
          Book Appointment
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DetailItem 
          icon={Phone} 
          title="Phone Number" 
          value={hospital.phone} 
        />
        <DetailItem 
          icon={CalendarClock} 
          title="Wait Time" 
          value="Approx. 15-20 minutes" 
        />
        <DetailItem 
          icon={Building2} 
          title="Facility Type" 
          value="General Hospital" 
        />
        <DetailItem 
          icon={Shield} 
          title="Insurance" 
          value="Most plans accepted" 
        />
      </div>
    </div>
  );
};

export default QuickInfo;
