import { Hospital } from "@/components/HospitalCard";
import { getAllStates, getDistrictsByState } from "@/data/locationData";

// Mock hospital data for Indian hospitals
export const hospitals: Hospital[] = [
  // Visakhapatnam - Government Hospitals
  {
    id: "gov1",
    name: "King George Hospital (KGH)",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "1.2 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.5,
    ratingCount: 623,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2564891",
    specialty: ["General Medicine", "Emergency", "Surgery"],
    hospitalType: "government"
  },
  {
    id: "gov2",
    name: "Government Victoria Hospital",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "1.8 km",
    image: "https://images.unsplash.com/photo-1578991624414-df826339aca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 4.2,
    ratingCount: 419,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2754328",
    specialty: ["General Medicine", "Gynecology", "Pediatrics"],
    hospitalType: "government"
  },
  {
    id: "gov3",
    name: "Government Hospital for Mental Care",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "2.3 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.1,
    ratingCount: 286,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2566652",
    specialty: ["Psychiatry", "Mental Health", "Counseling"],
    hospitalType: "government"
  },
  {
    id: "gov4",
    name: "Government TB and Chest Hospital",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "3.5 km",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.0,
    ratingCount: 207,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2553241",
    specialty: ["Pulmonology", "TB Treatment", "Respiratory Care"],
    hospitalType: "government"
  },
  {
    id: "gov5",
    name: "Government ENT Hospital",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "2.7 km",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.3,
    ratingCount: 312,
    open: true,
    openHours: "8:00 AM - 5:00 PM",
    phone: "+91 891 2564128",
    specialty: ["ENT", "Audiology", "Speech Therapy"],
    hospitalType: "government"
  },
  {
    id: "gov6",
    name: "Government Regional Eye Hospital",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "3.1 km",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.4,
    ratingCount: 378,
    open: true,
    openHours: "8:00 AM - 4:00 PM",
    phone: "+91 891 2567823",
    specialty: ["Ophthalmology", "Eye Surgery", "Vision Care"],
    hospitalType: "government"
  },
  {
    id: "gov7",
    name: "Rani Chandramani Devi Government Hospital",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "4.2 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.2,
    ratingCount: 265,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2789456",
    specialty: ["Women's Health", "Gynecology", "Obstetrics"],
    hospitalType: "government"
  },
  {
    id: "gov8",
    name: "Government Hospital for Chest and Communicable Diseases",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "3.8 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.1,
    ratingCount: 198,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2563247",
    specialty: ["Infectious Diseases", "Pulmonology", "General Medicine"],
    hospitalType: "government"
  },
  {
    id: "gov9",
    name: "Homi Bhabha Cancer Hospital & Research Centre",
    address: "Visakhapatnam, Andhra Pradesh",
    distance: "5.3 km",
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.7,
    ratingCount: 432,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2876543",
    specialty: ["Oncology", "Cancer Treatment", "Radiation Therapy"],
    hospitalType: "government"
  },
  
  // Visakhapatnam - Private Hospitals (existing with hospitalType added)
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
    specialty: ["Multi-Specialty", "Cardiology", "Oncology"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Nephrology", "Cardiology"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Orthopedics", "Neurology"],
    hospitalType: "private"
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
    specialty: ["General Medicine", "Gynecology", "Pediatrics"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Cardiology", "Pulmonology"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Cardiology", "Gastroenterology"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Oncology", "Urology"],
    hospitalType: "private"
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
    specialty: ["General Medicine", "Orthopedics", "ENT"],
    hospitalType: "private"
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
    specialty: ["General Medicine", "Gynecology", "Pediatrics"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Cardiology", "Neurology"],
    hospitalType: "private"
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
    specialty: ["General Medicine", "Emergency", "Pediatrics"],
    hospitalType: "government"
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
    specialty: ["Multi-Specialty", "Cardiology", "Orthopedics"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Cardiology", "Neurology"],
    hospitalType: "private"
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
    specialty: ["General Medicine", "Gynecology", "Pediatrics"],
    hospitalType: "private"
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
    specialty: ["General Medicine", "Surgery", "Orthopedics"],
    hospitalType: "private"
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
    specialty: ["General Medicine", "Emergency", "Pediatrics"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Cardiology", "Neurology", "Orthopedics"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Cardiology", "Gastroenterology"],
    hospitalType: "private"
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
    specialty: ["General Medicine", "Pediatrics", "Gynecology"],
    hospitalType: "private"
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
    specialty: ["General Medicine", "Surgery", "Orthopedics"],
    hospitalType: "private"
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
    specialty: ["Ophthalmology", "Eye Surgery"],
    hospitalType: "private"
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
    specialty: ["Oncology", "Cancer Treatment", "General Medicine"],
    hospitalType: "private"
  },
  
  // West Godavari - Government Hospitals (newly added)
  {
    id: "west_gov1",
    name: "Achanta Government Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "2.3 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.1,
    ratingCount: 186,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2412233",
    specialty: ["General Medicine", "Emergency", "Primary Care"],
    hospitalType: "government"
  },
  {
    id: "west_gov2",
    name: "Akividu Government Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1578991624414-df826339aca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 4.0,
    ratingCount: 167,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2413344",
    specialty: ["General Medicine", "Pediatrics", "Emergency"],
    hospitalType: "government"
  },
  {
    id: "west_gov3",
    name: "Chagallu Government Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "2.8 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 3.9,
    ratingCount: 143,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2414455",
    specialty: ["General Medicine", "Primary Care"],
    hospitalType: "government"
  },
  {
    id: "west_gov4",
    name: "Madhavaram Government Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "3.5 km",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.1,
    ratingCount: 156,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2415566",
    specialty: ["General Medicine", "Emergency"],
    hospitalType: "government"
  },
  {
    id: "west_gov5",
    name: "Mogalthur Government Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "4.1 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.0,
    ratingCount: 178,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2416677",
    specialty: ["General Medicine", "Primary Care", "Emergency"],
    hospitalType: "government"
  },
  {
    id: "west_gov6",
    name: "Narsapur Government Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "3.8 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.2,
    ratingCount: 216,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2417788",
    specialty: ["General Medicine", "Emergency", "Surgery"],
    hospitalType: "government"
  },
  {
    id: "west_gov7",
    name: "Nidadavolu Government Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "2.7 km",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.1,
    ratingCount: 189,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2418899",
    specialty: ["General Medicine", "Emergency", "Primary Care"],
    hospitalType: "government"
  },
  {
    id: "west_gov8",
    name: "Palakollu Government Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "3.4 km",
    image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.2,
    ratingCount: 204,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2419900",
    specialty: ["General Medicine", "Surgery", "Emergency"],
    hospitalType: "government"
  },
  {
    id: "west_gov9",
    name: "Poduru Government Hospital",
    address: "West Godavari, Andhra Pradesh",
    distance: "4.6 km",
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 3.9,
    ratingCount: 152,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2420011",
    specialty: ["General Medicine", "Primary Care"],
    hospitalType: "government"
  },
  {
    id: "west_gov10",
    name: "Area Hospital, Tadepalligudem",
    address: "West Godavari, Andhra Pradesh",
    distance: "2.5 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.3,
    ratingCount: 234,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2421122",
    specialty: ["General Medicine", "Emergency", "Surgery", "Pediatrics"],
    hospitalType: "government"
  },
  {
    id: "west_gov11",
    name: "Area Hospital, Tanuku",
    address: "West Godavari, Andhra Pradesh",
    distance: "3.7 km",
    image: "https://images.unsplash.com/photo-1578991624414-df826339aca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 4.2,
    ratingCount: 217,
    open: true,
    openHours: "24 hours",
    phone: "+91 883 2422233",
    specialty: ["General Medicine", "Emergency", "Surgery", "Gynecology"],
    hospitalType: "government"
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
    specialty: ["Multi-Specialty", "Medical Education", "Research"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Cardiology", "Neurology"],
    hospitalType: "private"
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
    specialty: ["General Medicine", "Pediatrics", "Gynecology"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Cardiology", "Oncology", "Neurology"],
    hospitalType: "private"
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
    specialty: ["General Medicine", "Surgery", "Emergency"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Cardiology", "Nephrology", "Urology"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Cardiology", "Neurology", "Orthopedics"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Cardiac Sciences", "Transplants"],
    hospitalType: "private"
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
    specialty: ["Research", "Multi-Specialty", "Neurology"],
    hospitalType: "private"
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
    specialty: ["Cancer Treatment", "Research", "Oncology"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Cardiac Sciences", "Neurosciences"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Liver Transplant", "Cardiac Sciences"],
    hospitalType: "private"
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
    specialty: ["Multi-Specialty", "Oncology", "Neurology"],
    hospitalType: "private"
  }
];

// Function to filter hospitals based on search criteria
export const searchHospitals = (query: string, location: string, state?: string, district?: string, hospitalType?: string) => {
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
  
  // Filter by district
  if (district && district !== "all_districts") {
    filteredHospitals = filteredHospitals.filter(hospital => {
      // Split address to check both the first part (usually district) and the whole address
      const addressParts = hospital.address.split(', ');
      return addressParts[0].includes(district) || hospital.address.includes(district);
    });
  }
  
  // Filter by hospital type
  if (hospitalType) {
    filteredHospitals = filteredHospitals.filter(
      hospital => hospital.hospitalType === hospitalType
    );
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
