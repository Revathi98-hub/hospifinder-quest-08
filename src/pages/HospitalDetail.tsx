
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  CalendarClock, 
  Building2, 
  Shield, 
  Users,
  LucideIcon
} from "lucide-react";
import { getHospitalById } from "@/data/hospitalData";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ReviewForm from "@/components/ReviewForm";
import { toast } from "sonner";

interface DetailItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
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

const HospitalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [hospital, setHospital] = useState(id ? getHospitalById(id) : null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoaded, setIsLoaded] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [hospitalDetails, setHospitalDetails] = useState({
    overview: {
      description: "Metropolitan General Hospital is a leading healthcare facility providing comprehensive medical services across multiple specialties. Founded in 1965, the hospital has grown to become one of the most trusted medical centers in the region, known for its advanced technology, skilled medical professionals, and patient-centered care approach.",
      beds: "350",
      emergency: "24/7 Emergency Services",
      insurance: "Accepts most major insurance plans"
    },
    services: [
      "Emergency Care",
      "Cardiology",
      "Orthopedics",
      "Neurology",
      "Oncology",
      "Pediatrics",
      "Obstetrics & Gynecology",
      "Radiology & Imaging",
      "Laboratory Services",
      "Physical Therapy",
      "Mental Health Services"
    ],
    doctors: [
      { name: "Dr. Sarah Johnson", specialty: "Cardiology", rating: 4.9 },
      { name: "Dr. Michael Chen", specialty: "Neurology", rating: 4.8 },
      { name: "Dr. Emily Rodriguez", specialty: "Pediatrics", rating: 4.7 },
      { name: "Dr. David Park", specialty: "Orthopedics", rating: 4.8 },
      { name: "Dr. Lisa Wong", specialty: "Oncology", rating: 4.9 }
    ],
    reviews: [
      { user: "John D.", rating: 5, comment: "Excellent care from the moment I arrived. The staff was attentive and professional." },
      { user: "Sarah M.", rating: 4, comment: "Good experience overall. Wait times could be improved, but the medical care was excellent." },
      { user: "Robert T.", rating: 5, comment: "The doctors explained everything thoroughly and made me feel comfortable throughout my procedure." },
      { user: "Maria L.", rating: 4, comment: "Clean facilities and caring staff. Would recommend to family and friends." }
    ]
  });
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  useEffect(() => {
    if (id) {
      setHospital(getHospitalById(id));
    }
  }, [id]);
  
  if (!hospital) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Hospital Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The hospital you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/search" className="btn-primary">
            Back to Search
          </Link>
        </div>
      </div>
    );
  }
  
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Services" },
    { id: "doctors", label: "Doctors" },
    { id: "reviews", label: "Reviews" }
  ];
  
  const handleSubmitReview = (review: { rating: number; comment: string }) => {
    // In a real app, this would save to a database
    const newReview = {
      user: "You",
      rating: review.rating,
      comment: review.comment
    };
    
    setHospitalDetails(prevDetails => ({
      ...prevDetails,
      reviews: [newReview, ...prevDetails.reviews]
    }));
    
    setShowReviewForm(false);
    toast.success("Thank you for your review!");
    
    // Auto-switch to reviews tab
    setActiveTab("reviews");
  };
  
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section with Hospital Image */}
      <div className="relative w-full h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${hospital.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 container-custom pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/search" 
              className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to results
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white shadow-text">{hospital.name}</h1>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
              <div className="flex items-center text-white/90">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{hospital.address}</span>
              </div>
              
              <div className="flex items-center text-white/90">
                <Clock className="w-4 h-4 mr-1" />
                <span className={hospital.open ? "text-green-400" : "text-red-400"}>
                  {hospital.open ? "Open" : "Closed"} · {hospital.openHours}
                </span>
              </div>
              
              <div className="flex items-center text-white/90">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span>{hospital.rating} ({hospital.ratingCount} reviews)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container-custom mt-8">
        <div className="glass rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Information</h2>
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
        
        {/* Tabs Navigation */}
        <div className="border-b mb-6">
          <nav className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "pb-4 px-1 border-b-2 font-medium transition-colors relative",
                  activeTab === tab.id
                    ? "border-medical-500 text-medical-600"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
                
                {tab.id === "reviews" && (
                  <span className="ml-2 bg-medical-50 text-medical-600 text-xs px-1.5 py-0.5 rounded-full">
                    {hospitalDetails.reviews.length}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === "overview" && (
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
          )}
          
          {activeTab === "services" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Services Offered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hospitalDetails.services.map((service, index) => (
                  <div 
                    key={index} 
                    className="glass p-4 rounded-lg flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-medical-500"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === "doctors" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Medical Staff</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospitalDetails.doctors.map((doctor, index) => (
                  <div key={index} className="glass p-6 rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-medical-100 mb-4 flex items-center justify-center text-medical-600 font-medium">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-semibold text-lg">{doctor.name}</h3>
                    <p className="text-muted-foreground mb-2">{doctor.specialty}</p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>{doctor.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === "reviews" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Patient Reviews</h2>
                <Button 
                  onClick={() => setShowReviewForm(true)}
                  disabled={showReviewForm}
                >
                  Write a Review
                </Button>
              </div>
              
              {showReviewForm && (
                <div className="glass p-6 rounded-xl mb-6">
                  <ReviewForm 
                    onSubmit={handleSubmitReview}
                    onCancel={() => setShowReviewForm(false)}
                  />
                </div>
              )}
              
              <div className="space-y-6">
                {hospitalDetails.reviews.map((review, index) => (
                  <div key={index} className="glass p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center text-medical-600 font-medium">
                          {review.user[0]}
                        </div>
                        <span className="font-medium">{review.user}</span>
                      </div>
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i}
                            className={cn(
                              "w-4 h-4",
                              i < review.rating 
                                ? "fill-yellow-400 text-yellow-400" 
                                : "text-gray-300"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HospitalDetail;
