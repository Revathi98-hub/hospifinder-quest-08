
import { Building2, Shield } from "lucide-react";

interface OverviewTabProps {
  hospital: {
    name: string;
    specialty?: string[];
  };
  hospitalDetails: {
    overview: {
      description: string;
      beds: string;
      emergency: string;
      insurance: string;
    };
  };
}

const OverviewTab = ({ hospital, hospitalDetails }: OverviewTabProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">About {hospital.name}</h2>
      <p className="text-muted-foreground mb-6">
        {hospitalDetails.overview.description}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass p-6 rounded-xl">
          <h3 className="font-medium mb-2">Bed Capacity</h3>
          <p>{hospitalDetails.overview.beds} beds</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h3 className="font-medium mb-2">Emergency Services</h3>
          <p>{hospitalDetails.overview.emergency}</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h3 className="font-medium mb-2">Insurance</h3>
          <p>{hospitalDetails.overview.insurance}</p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-4">Specialties</h3>
      <div className="flex flex-wrap gap-2 mb-8">
        {hospital.specialty?.map(spec => (
          <span 
            key={spec} 
            className="bg-medical-50 text-medical-600 px-3 py-1 rounded-full"
          >
            {spec}
          </span>
        ))}
      </div>
    </div>
  );
};

export default OverviewTab;
