
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
