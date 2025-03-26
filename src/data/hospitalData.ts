import { Hospital } from "@/components/HospitalCard";

// Mock hospital data
export const hospitals: Hospital[] = [
  {
    id: "1",
    name: "King George Hospital",
    address: "Maharani Peta, Visakhapatnam, Andhra Pradesh",
    distance: "1.2 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.6,
    ratingCount: 523,
    open: true,
    openHours: "24 hours",
    phone: "+91 891 2564891",
    specialty: ["Cardiology", "Emergency", "Orthopedics"]
  },
  {
    id: "2",
    name: "Apollo Hospitals Visakhapatnam",
    address: "Waltair Main Road, Visakhapatnam, Andhra Pradesh",
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
    name: "CARE Hospitals Visakhapatnam",
    address: "Ramnagar, Visakhapatnam, Andhra Pradesh",
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
    name: "Government General Hospital Vijayawada",
    address: "Governor Peta, Vijayawada, Andhra Pradesh",
    distance: "1.8 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.3,
    ratingCount: 287,
    open: true,
    openHours: "24 hours",
    phone: "+91 866 2574115",
    specialty: ["General Medicine", "Emergency", "Pediatrics"]
  },
  {
    id: "5",
    name: "SVIMS - Sri Venkateswara Institute of Medical Sciences",
    address: "Alipiri Road, Tirupati, Andhra Pradesh",
    distance: "2.3 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.7,
    ratingCount: 421,
    open: true,
    openHours: "24 hours",
    phone: "+91 877 2287777",
    specialty: ["Cardiology", "Neurology", "Oncology"]
  },
  {
    id: "6",
    name: "Andhra Hospitals Vijayawada",
    address: "Sidhartha Nagar, Vijayawada, Andhra Pradesh",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    ratingCount: 303,
    open: true,
    openHours: "24 hours",
    phone: "+91 866 2471600",
    specialty: ["Pediatrics", "Cardiology", "Gynecology"]
  },
  {
    id: "7",
    name: "Krishna Institute of Medical Sciences (KIMS)",
    address: "NH-16, Chinna Avutapalli, Vijayawada, Andhra Pradesh",
    distance: "4.5 km",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.5,
    ratingCount: 532,
    open: true,
    openHours: "24 hours",
    phone: "+91 866 2845555",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology"]
  },
  {
    id: "8",
    name: "Mahatma Gandhi Memorial Hospital",
    address: "Kakinada, Andhra Pradesh",
    distance: "2.1 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.2,
    ratingCount: 245,
    open: true,
    openHours: "24 hours",
    phone: "+91 884 2363401",
    specialty: ["General Medicine", "Emergency", "Surgery"]
  },
  {
    id: "9",
    name: "Apollo Hospitals Hyderabad",
    address: "Film Nagar, Jubilee Hills, Hyderabad, Telangana",
    distance: "3.7 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.8,
    ratingCount: 878,
    open: true,
    openHours: "24 hours",
    phone: "+91 40 2360 7777",
    specialty: ["Multi-Specialty", "Cardiac Sciences", "Transplants"]
  },
  {
    id: "10",
    name: "AIIMS Delhi",
    address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi, Delhi",
    distance: "4.1 km",
    image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.9,
    ratingCount: 1543,
    open: true,
    openHours: "24 hours",
    phone: "+91 11 2658 8500",
    specialty: ["Research", "Multi-Specialty", "Neurology"]
  },
  {
    id: "11",
    name: "Tata Memorial Hospital",
    address: "Dr. E Borges Road, Parel, Mumbai, Maharashtra",
    distance: "5.8 km",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.8,
    ratingCount: 987,
    open: true,
    openHours: "8:00 AM - 5:00 PM",
    phone: "+91 22 2417 7000",
    specialty: ["Cancer Treatment", "Research", "Oncology"]
  },
  {
    id: "12",
    name: "Christian Medical College",
    address: "Ida Scudder Road, Vellore, Tamil Nadu",
    distance: "3.5 km",
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.7,
    ratingCount: 756,
    open: true,
    openHours: "24 hours",
    phone: "+91 416 228 3509",
    specialty: ["Education", "Multi-Specialty", "Research"]
  }
];

// Function to filter hospitals based on search criteria
export const searchHospitals = (query: string, location: string) => {
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
