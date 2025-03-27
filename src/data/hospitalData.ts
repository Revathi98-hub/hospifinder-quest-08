import { Hospital } from "@/components/HospitalCard";
import { getAllStates, getDistrictsByState } from "@/data/locationData";

// Mock hospital data for Indian hospitals
export const hospitals: Hospital[] = [
  // Andhra Pradesh
  {
    id: "1",
    name: "King George Hospital (KGH)",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "1.2 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.5,
    ratingCount: 623,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2564891",
    specialty: ["General Medicine", "Emergency", "Surgery"]
  },
  {
    id: "2",
    name: "Apollo Hospitals",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "2.5 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.8,
    ratingCount: 428,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2727272",
    specialty: ["Multi-Specialty", "Cardiology", "Oncology"]
  },
  {
    id: "3",
    name: "CARE Hospitals",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "3.7 km",
    image: "https://images.unsplash.com/photo-1578991624414-df826339aca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 4.5,
    ratingCount: 345,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 3041111",
    specialty: ["Multi-Specialty", "Nephrology", "Cardiology"]
  },
  {
    id: "4",
    name: "Medicover Hospital",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "4.1 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    ratingCount: 287,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2867890",
    specialty: ["Multi-Specialty", "Orthopedics", "Neurology"]
  },
  {
    id: "5",
    name: "Queens NRI Hospital",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.3,
    ratingCount: 321,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2566777",
    specialty: ["General Medicine", "Gynecology", "Pediatrics"]
  },
  {
    id: "6",
    name: "SevenHills Hospital",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "5.2 km",
    image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.4,
    ratingCount: 403,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2505944",
    specialty: ["Multi-Specialty", "Cardiology", "Pulmonology"]
  },
  {
    id: "7",
    name: "OMNI RK Super Specialty Hospital",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "4.5 km",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.5,
    ratingCount: 332,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2567888",
    specialty: ["Multi-Specialty", "Cardiology", "Gastroenterology"]
  },
  {
    id: "8",
    name: "Manipal Hospital",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "6.1 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.7,
    ratingCount: 245,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2868686",
    specialty: ["Multi-Specialty", "Oncology", "Urology"]
  },
  {
    id: "9",
    name: "Indus Hospital",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "3.7 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.2,
    ratingCount: 178,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2797979",
    specialty: ["General Medicine", "Orthopedics", "ENT"]
  },
  {
    id: "10",
    name: "Q1 Hospital",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "4.1 km",
    image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.0,
    ratingCount: 143,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2766666",
    specialty: ["General Medicine", "Gynecology", "Pediatrics"]
  },
  // Additional Andhra Pradesh hospitals in different districts
  {
    id: "17",
    name: "KIMS Hospital",
    address: "Guntur, Andhra Pradesh",
    distance: "4.5 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.5,
    ratingCount: 532,
    open: true,
    openHours: "24 hours",
    phone: "+91 866 2845555",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology"]
  },
  {
    id: "18",
    name: "Government General Hospital",
    address: "Kurnool, Andhra Pradesh",
    distance: "1.8 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.3,
    ratingCount: 287,
    open: true,
    openHours: "24 hours",
    phone: "+91 866 2574115",
    specialty: ["General Medicine", "Emergency", "Pediatrics"]
  },
  {
    id: "19",
    name: "Apollo Hospitals",
    address: "Nellore, Andhra Pradesh",
    distance: "2.3 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    ratingCount: 356,
    open: true,
    openHours: "24 hours",
    phone: "+91 861 2345678",
    specialty: ["Multi-Specialty", "Cardiology", "Orthopedics"]
  },
  // West Godavari hospitals
  {
    id: "20",
    name: "Siva Speciality Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "2.1 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.3,
    ratingCount: 342,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2432555",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology"]
  },
  {
    id: "21",
    name: "Sri Janaki Hospitals",
    address: "West Godavari, Andhra Pradesh",
    distance: "3.5 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.2,
    ratingCount: 278,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2456789",
    specialty: ["General Medicine", "Gynecology", "Pediatrics"]
  },
  {
    id: "22",
    name: "Mother Vannini Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "4.0 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.4,
    ratingCount: 315,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2465432",
    specialty: ["General Medicine", "Surgery", "Orthopedics"]
  },
  {
    id: "23",
    name: "Vaishnavi Hospitals",
    address: "West Godavari, Andhra Pradesh",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.1,
    ratingCount: 246,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2476543",
    specialty: ["General Medicine", "Emergency", "Pediatrics"]
  },
  {
    id: "24",
    name: "Alluri Sitarama Raju Academy of Medical Sciences (ASRAM Hospital)",
    address: "West Godavari, Andhra Pradesh",
    distance: "5.5 km",
    image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    ratingCount: 420,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2487654",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology", "Orthopedics"]
  },
  {
    id: "25",
    name: "Andhra Hospitals Eluru Pvt Ltd",
    address: "West Godavari, Andhra Pradesh",
    distance: "2.8 km",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.3,
    ratingCount: 298,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2498765",
    specialty: ["Multi-Specialty", "Cardiology", "Gastroenterology"]
  },
  {
    id: "26",
    name: "Bhuvaneswari Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "3.7 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.0,
    ratingCount: 184,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2412345",
    specialty: ["General Medicine", "Pediatrics", "Gynecology"]
  },
  {
    id: "27",
    name: "Chaitra Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "4.2 km",
    image: "https://images.unsplash.com/photo-1578991624414-df826339aca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 4.2,
    ratingCount: 215,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2423456",
    specialty: ["General Medicine", "Surgery", "Orthopedics"]
  },
  {
    id: "28",
    name: "Dr. G R Reddy Eye Care Center",
    address: "West Godavari, Andhra Pradesh",
    distance: "3.9 km",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.5,
    ratingCount: 328,
    open: true,
    openHours: "9:00 AM - 7:00 PM",
    phone: "+91 883 2434567",
    specialty: ["Ophthalmology", "Eye Surgery"]
  },
  {
    id: "29",
    name: "Good Samaritan Cancer and General Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "5.1 km",
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.4,
    ratingCount: 356,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2445678",
    specialty: ["Oncology", "Cancer Treatment", "General Medicine"]
  },
  
  // East Godavari hospitals - Updated with clearer district names
  {
    id: "30",
    name: "GSL Medical College and General Hospital",
    address: "East Godavari, Andhra Pradesh",
    distance: "2.3 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.5,
    ratingCount: 467,
    open: true,
    openHours: "24 hours",
    phone: "+91 884 2456789",
    specialty: ["Multi-Specialty", "Medical Education", "Research"]
  },
  {
    id: "31",
    name: "Sri Venkateswara Hospitals",
    address: "East Godavari, Andhra Pradesh",
    distance: "3.1 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.3,
    ratingCount: 328,
    open: true,
    openHours: "24 hours",
    phone: "+91 884 2467890",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology"]
  },
  {
    id: "32",
    name: "Sri Srinivasa Hospitals",
    address: "East Godavari, Andhra Pradesh",
    distance: "2.8 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.2,
    ratingCount: 295,
    open: true,
    openHours: "24 hours",
    phone: "+91 884 2478901",
    specialty: ["General Medicine", "Pediatrics", "Gynecology"]
  },
  {
    id: "33",
    name: "Apollo Hospital",
    address: "East Godavari, Andhra Pradesh",
    distance: "3.5 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.7,
    ratingCount: 512,
    open: true,
    openHours: "24 hours",
    phone: "+91 884 2489012",
    specialty: ["Multi-Specialty", "Cardiology", "Oncology", "Neurology"]
  },
  {
    id: "34",
    name: "Trust Hospital",
    address: "East Godavari, Andhra Pradesh",
    distance: "2.9 km",
    image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.1,
    ratingCount: 276,
    open: true,
    openHours: "24 hours",
    phone: "+91 884 2490123",
    specialty: ["General Medicine", "Surgery", "Emergency"]
  },
  {
    id: "35",
    name: "Pragati Super Speciality Hospital",
    address: "East Godavari, Andhra Pradesh",
    distance: "4.2 km",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.4,
    ratingCount: 342,
    open: true,
    openHours: "24 hours",
    phone: "+91 884 2401234",
    specialty: ["Multi-Specialty", "Cardiology", "Nephrology", "Urology"]
  },
  {
    id: "36",
    name: "KIMS Hospital",
    address: "East Godavari, Andhra Pradesh",
    distance: "3.7 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    ratingCount: 384,
    open: true,
    openHours: "24 hours",
    phone: "+91 884 2412345",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology", "Orthopedics"]
  },
  
  // Other major Indian cities
  {
    id: "11",
    name: "Apollo Hospitals",
    address: "Hyderabad, Telangana",
    distance: "5.8 km",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.8,
    ratingCount: 987,
    open: true,
    openHours: "24 hours",
    phone: "+91 40 2360 7777",
    specialty: ["Multi-Specialty", "Cardiac Sciences", "Transplants"]
  },
  {
    id: "12",
    name: "AIIMS Delhi",
    address: "New Delhi, Delhi",
    distance: "3.5 km",
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.9,
    ratingCount: 1756,
    open: true,
    openHours: "24 hours",
    phone: "+91 11 2658 8500",
    specialty: ["Research", "Multi-Specialty", "Neurology"]
  },
  {
    id: "13",
    name: "Tata Memorial Hospital",
    address: "Mumbai, Maharashtra",
    distance: "4.2 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.8,
    ratingCount: 1243,
    open: true,
    openHours: "8:00 AM - 5:00 PM",
    phone: "+91 22 2417 7000",
    specialty: ["Cancer Treatment", "Research", "Oncology"]
  },
  {
    id: "14",
    name: "Fortis Hospital",
    address: "Bengaluru, Karnataka",
    distance: "6.3 km",
    image: "https://images.unsplash.com/photo-1578991624414-df826339aca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 4.6,
    ratingCount: 876,
    open: true,
    openHours: "24 hours",
    phone: "+91 80 6621 4444",
    specialty: ["Multi-Specialty", "Cardiac Sciences", "Neurosciences"]
  },
  {
    id: "15",
    name: "Medanta - The Medicity",
    address: "Gurugram, Haryana",
    distance: "4.8 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.7,
    ratingCount: 923,
    open: true,
    openHours: "24 hours",
    phone: "+91 124 4141 414",
    specialty: ["Multi-Specialty", "Liver Transplant", "Cardiac Sciences"]
  },
  {
    id: "16",
    name: "Max Super Specialty Hospital",
    address: "Vaishali, Bihar",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.5,
    ratingCount: 723,
    open: true,
    openHours: "24 hours",
    phone: "+91 120 4222 222",
    specialty: ["Multi-Specialty", "Oncology", "Neurology"]
  }
];

// Function to filter hospitals based on search criteria
export const searchHospitals = (query: string, location: string, state?: string, district?: string) => {
  let filteredHospitals = [...hospitals];
  
  if (query) {
    const lowerQuery = query.toLowerCase();
    filteredHospitals = filteredHospitals.filter(
      hospital => 
        hospital.name.toLowerCase().includes(lowerQuery) || 
        hospital.specialty?.some(spec => spec.toLowerCase().includes(lowerQuery))
    );
  }
  
  if (location) {
    const lowerLocation = location.toLowerCase();
    filteredHospitals = filteredHospitals.filter(
      hospital => hospital.address.toLowerCase().includes(lowerLocation)
    );
  }
  
  // Filter by state
  if (state && state !== "all_states") {
    filteredHospitals = filteredHospitals.filter(
      hospital => hospital.address.includes(state)
    );
  }
  
  // Filter by district - improved to handle cases like "West Godavari" and "East Godavari"
  if (district && district !== "all_districts") {
    filteredHospitals = filteredHospitals.filter(hospital => {
      // Split address to check both the first part (usually district) and the whole address
      const addressParts = hospital.address.split(', ');
      return addressParts[0].includes(district) || hospital.address.includes(district);
    });
  }
  
  return filteredHospitals;
};

// Function to get a hospital by ID
export const getHospitalById = (id: string) => {
  return hospitals.find(hospital => hospital.id === id);
};

// Get all unique specialties from the hospitals data
export const getAllSpecialties = () => {
  const specialties = new Set<string>();
  hospitals.forEach(hospital => {
    hospital.specialty?.forEach(spec => {
      specialties.add(spec);
    });
  });
  return Array.from(specialties);
};

// Get hospitals by location
export const getHospitalsByLocation = (lat: number, lng: number, radius: number = 10) => {
  // In a real app, we would use the coordinates to calculate actual distances
  // For this demo, we'll just sort the hospitals randomly and filter
  
  // Simulated function that would calculate real distances in a production app
  const calculateDistance = (hospital: Hospital, userLat: number, userLng: number) => {
    // This is a very simplified version - in real-world, use Haversine formula
    // For now, return a random distance between 0.5 and 20 km
    return Math.random() * 19.5 + 0.5;
  };
  
  return hospitals.map(hospital => {
    const calculatedDistance = calculateDistance(hospital, lat, lng);
    return {
      ...hospital,
      distance: `${calculatedDistance.toFixed(1)} km`,
      actualDistance: calculatedDistance // for sorting
    };
  })
  .filter(hospital => hospital.actualDistance <= radius)
  .sort((a, b) => (a.actualDistance || 0) - (b.actualDistance || 0));
};
