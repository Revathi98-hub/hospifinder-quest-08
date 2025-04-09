
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getHospitalById } from "@/data/hospitalData";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";

// Import components
import HospitalHeader from "@/components/hospital-detail/HospitalHeader";
import QuickInfo from "@/components/hospital-detail/QuickInfo";
import TabNavigation from "@/components/hospital-detail/TabNavigation";
import HospitalStats from "@/components/hospital-detail/HospitalStats";
import TabContent from "@/components/hospital-detail/TabContent";
import AppointmentDialog from "@/components/hospital-detail/AppointmentDialog";

const doctorImages = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
];

const HospitalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const showBookingModal = searchParams.get('booking') === 'true';
  const { user } = useAuth();
  
  const [hospital, setHospital] = useState(id ? getHospitalById(id) : null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(showBookingModal);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
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
      { name: "Dr. Sarah Johnson", specialty: "Cardiology", rating: 4.9, image: doctorImages[0] },
      { name: "Dr. Michael Chen", specialty: "Neurology", rating: 4.8, image: doctorImages[1] },
      { name: "Dr. Emily Rodriguez", specialty: "Pediatrics", rating: 4.7, image: doctorImages[2] },
      { name: "Dr. David Park", specialty: "Orthopedics", rating: 4.8, image: doctorImages[3] },
      { name: "Dr. Lisa Wong", specialty: "Oncology", rating: 4.9, image: doctorImages[4] }
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

  useEffect(() => {
    setShowAppointmentForm(showBookingModal);
  }, [showBookingModal]);
  
  // Fetch appointment and review counts
  useEffect(() => {
    if (id && user) {
      // Get appointment count
      const fetchAppointmentCount = async () => {
        const { count, error } = await supabase
          .from('appointments')
          .select('*', { count: 'exact', head: true })
          .eq('hospital_id', id);
          
        if (!error && count !== null) {
          setAppointmentCount(count);
        }
      };
      
      // Get review count
      const fetchReviewCount = async () => {
        const { count, error } = await supabase
          .from('reviews')
          .select('*', { count: 'exact', head: true })
          .eq('hospital_id', id);
          
        if (!error && count !== null) {
          setReviewCount(count);
        }
      };
      
      fetchAppointmentCount();
      fetchReviewCount();
    }
  }, [id, user]);
  
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
    { id: "reviews", label: "Reviews", count: hospitalDetails.reviews.length }
  ];
  
  const handleSubmitReview = (review: { rating: number; comment: string }) => {
    const newReview = {
      user: "You",
      rating: review.rating,
      comment: review.comment
    };
    
    setHospitalDetails(prevDetails => ({
      ...prevDetails,
      reviews: [newReview, ...prevDetails.reviews]
    }));
    
    toast.success("Thank you for your review!");
    setActiveTab("reviews");
  };

  const handleAppointmentSuccess = () => {
    setShowAppointmentForm(false);
    // Remove the booking parameter from the URL
    navigate(`/hospital/${id}`, { replace: true });
  };

  const handleBookAppointment = () => {
    setShowAppointmentForm(true);
    
    // If the URL doesn't have the booking parameter, add it
    if (!showBookingModal) {
      navigate(`/hospital/${id}?booking=true`, { replace: true });
    }
  };
  
  const navigateToHospital = () => {
    navigate(`/hospital/${id}`, { replace: true });
  };
  
  console.log("Auth state:", { user, showAppointmentForm });
  
  return (
    <div className="min-h-screen pb-20">
      <HospitalHeader hospital={hospital} isLoaded={isLoaded} />
      
      <div className="container-custom mt-8">
        <QuickInfo hospital={hospital} onBookAppointment={handleBookAppointment} />
        
        {user && (
          <HospitalStats appointmentCount={appointmentCount} reviewCount={reviewCount} />
        )}
        
        <TabNavigation 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        <TabContent 
          activeTab={activeTab}
          hospital={hospital}
          hospitalDetails={hospitalDetails}
          onSubmitReview={handleSubmitReview}
          hospitalId={id || ''}
        />
      </div>

      <AppointmentDialog 
        hospital={hospital}
        showAppointmentForm={showAppointmentForm}
        setShowAppointmentForm={setShowAppointmentForm}
        onSuccess={handleAppointmentSuccess}
        onCancel={() => {
          setShowAppointmentForm(false);
          // Remove the booking parameter from the URL if it exists
          if (showBookingModal) {
            navigate(`/hospital/${id}`, { replace: true });
          }
        }}
        navigateToHospital={navigateToHospital}
      />
    </div>
  );
};

export default HospitalDetail;
