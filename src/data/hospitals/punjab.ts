
import { Hospital } from "./types";

// Punjab hospitals
export const punjabHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "punjab_gov1",
    name: "PGIMER, Chandigarh",
    address: "Madhya Marg, Sector 12, Chandigarh, Punjab",
    distance: "4.8 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.7,
    ratingCount: 520,
    open: true,
    openHours: "24 hours",
    phone: "+91 172 2746018",
    specialty: ["Multi-Specialty", "Neurology", "Cardiology", "Nephrology"],
    hospitalType: "government"
  },
  {
    id: "punjab_gov2",
    name: "Government Medical College and Hospital, Chandigarh",
    address: "Sector 32, Chandigarh, Punjab",
    distance: "5.5 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.3,
    ratingCount: 380,
    open: true,
    openHours: "24 hours",
    phone: "+91 172 2665253",
    specialty: ["General Medicine", "Surgery", "Orthopedics"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "punjab_pvt1",
    name: "Fortis Hospital, Mohali",
    address: "Phase 8, Mohali, Punjab",
    distance: "8.5 km",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.5,
    ratingCount: 450,
    open: true,
    openHours: "24 hours",
    phone: "+91 172 5096001",
    specialty: ["Multi-Specialty", "Cardiology", "Orthopedics", "Neurology"],
    hospitalType: "private"
  },
  {
    id: "punjab_pvt2",
    name: "Max Super Speciality Hospital, Mohali",
    address: "Phase 6, Mohali, Punjab",
    distance: "9.2 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.6,
    ratingCount: 480,
    open: true,
    openHours: "24 hours",
    phone: "+91 172 6652000",
    specialty: ["Multi-Specialty", "Cardiac Sciences", "Neurosciences", "Oncology"],
    hospitalType: "private"
  }
];
