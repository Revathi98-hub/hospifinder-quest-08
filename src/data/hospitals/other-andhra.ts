
import { Hospital } from "./types";

// Additional Andhra Pradesh hospitals in different districts
export const otherAndhraHospitals: Hospital[] = [
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
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    ratingCount: 356,
    open: true,
    openHours: "24 hours",
    phone: "+91 861 2345678",
    specialty: ["Multi-Specialty", "Cardiology", "Orthopedics"],
    hospitalType: "private"
  }
];
