
import { Hospital } from "@/components/HospitalCard";

// Mock hospital data
export const hospitals: Hospital[] = [
  {
    id: "1",
    name: "Metropolitan General Hospital",
    address: "123 Health Avenue, New York, NY",
    distance: "1.2 miles",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.8,
    ratingCount: 523,
    open: true,
    openHours: "24 hours",
    phone: "(555) 123-4567",
    specialty: ["Cardiology", "Emergency", "Surgery"]
  },
  {
    id: "2",
    name: "Riverside Medical Center",
    address: "456 Wellness Parkway, New York, NY",
    distance: "2.5 miles",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.6,
    ratingCount: 328,
    open: true,
    openHours: "24 hours",
    phone: "(555) 234-5678",
    specialty: ["Pediatrics", "Orthopedics"]
  },
  {
    id: "3",
    name: "Sunnyvale Community Hospital",
    address: "789 Care Street, New York, NY",
    distance: "3.7 miles",
    image: "https://images.unsplash.com/photo-1578991624414-df826339aca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 4.3,
    ratingCount: 245,
    open: false,
    openHours: "8:00 AM - 8:00 PM",
    phone: "(555) 345-6789",
    specialty: ["Family Medicine", "Dermatology"]
  },
  {
    id: "4",
    name: "Central Healthcare Clinic",
    address: "101 Medical Drive, New York, NY",
    distance: "4.1 miles",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.5,
    ratingCount: 187,
    open: true,
    openHours: "7:00 AM - 10:00 PM",
    phone: "(555) 456-7890",
    specialty: ["Neurology", "Oncology"]
  },
  {
    id: "5",
    name: "Harborview Medical Pavilion",
    address: "222 Health Boulevard, New York, NY",
    distance: "5.3 miles",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.7,
    ratingCount: 421,
    open: true,
    openHours: "24 hours",
    phone: "(555) 567-8901",
    specialty: ["Cardiology", "Pulmonology", "Internal Medicine"]
  },
  {
    id: "6",
    name: "Oakwood Health Institute",
    address: "333 Healing Lane, New York, NY",
    distance: "6.8 miles",
    image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.4,
    ratingCount: 203,
    open: false,
    openHours: "9:00 AM - 7:00 PM",
    phone: "(555) 678-9012",
    specialty: ["Psychiatry", "Psychology"]
  },
  // Indian Hospitals
  {
    id: "7",
    name: "Apollo Hospitals",
    address: "Plot No.1, Film Nagar, Jubilee Hills, Hyderabad, Telangana",
    distance: "1.5 km",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.7,
    ratingCount: 832,
    open: true,
    openHours: "24 hours",
    phone: "+91 40 2360 7777",
    specialty: ["Multi-Specialty", "Cardiology", "Oncology"]
  },
  {
    id: "8",
    name: "AIIMS Delhi",
    address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi, Delhi",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.9,
    ratingCount: 1245,
    open: true,
    openHours: "24 hours",
    phone: "+91 11 2658 8500",
    specialty: ["Research", "Multi-Specialty", "Neurology"]
  },
  {
    id: "9",
    name: "Fortis Hospital",
    address: "Sector 62, Phase-VIII, Mohali, Punjab",
    distance: "2.7 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.5,
    ratingCount: 678,
    open: true,
    openHours: "24 hours",
    phone: "+91 172 5096 222",
    specialty: ["Cardiology", "Orthopedics", "Gastroenterology"]
  },
  {
    id: "10",
    name: "Manipal Hospital",
    address: "HAL Airport Road, Kodihalli, Bengaluru, Karnataka",
    distance: "4.1 km",
    image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.6,
    ratingCount: 543,
    open: true,
    openHours: "24 hours",
    phone: "+91 80 2502 4444",
    specialty: ["Transplants", "Oncology", "Cardiology"]
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
