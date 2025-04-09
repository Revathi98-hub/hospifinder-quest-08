
import { Hospital } from "@/components/HospitalCard";
import OverviewTab from "./OverviewTab";
import ServicesTab from "./ServicesTab";
import DoctorsTab from "./DoctorsTab";
import ReviewsTab from "./ReviewsTab";

interface TabContentProps {
  activeTab: string;
  hospital: Hospital;
  hospitalDetails: {
    overview: {
      description: string;
      beds: string;
      emergency: string;
      insurance: string;
    };
    services: string[];
    doctors: {
      name: string;
      specialty: string;
      rating: number;
      image: string;
    }[];
    reviews: {
      user: string;
      rating: number;
      comment: string;
    }[];
  };
  onSubmitReview: (review: { rating: number; comment: string }) => void;
  hospitalId: string;
}

const TabContent = ({ 
  activeTab, 
  hospital,
  hospitalDetails,
  onSubmitReview,
  hospitalId 
}: TabContentProps) => {
  return (
    <div className="animate-fade-in">
      {activeTab === "overview" && (
        <OverviewTab hospital={hospital} hospitalDetails={hospitalDetails} />
      )}
      
      {activeTab === "services" && (
        <ServicesTab services={hospitalDetails.services} />
      )}
      
      {activeTab === "doctors" && (
        <DoctorsTab doctors={hospitalDetails.doctors} />
      )}
      
      {activeTab === "reviews" && (
        <ReviewsTab 
          hospitalId={hospitalId || ''}
          reviews={hospitalDetails.reviews}
          onSubmitReview={onSubmitReview}
        />
      )}
    </div>
  );
};

export default TabContent;
