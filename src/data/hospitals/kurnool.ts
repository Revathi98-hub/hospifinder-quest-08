
import { Hospital } from "./types";

// Government Hospitals in Kurnool District
export const governmentKurnoolHospitals: Hospital[] = [
  {
    id: "ku-gov-01",
    name: "Government General Hospital, Kurnool",
    address: "Kurnool, Andhra Pradesh",
    distance: "2.8 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 3.9,
    ratingCount: 215,
    open: true,
    openHours: "24 hours",
    phone: "+91 8518 234567",
    specialty: ["General Medicine", "Emergency", "Surgery", "Orthopedics"],
    hospitalType: "government"
  },
  {
    id: "ku-gov-02",
    name: "Government Hospital eUPHC, Kurnool",
    address: "Kurnool, Andhra Pradesh",
    distance: "3.5 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 3.7,
    ratingCount: 145,
    open: true,
    openHours: "24 hours",
    phone: "+91 8518 345678",
    specialty: ["Primary Care", "Family Medicine"],
    hospitalType: "government"
  },
  {
    id: "ku-gov-03",
    name: "Government Regional Eye Hospital, Kurnool",
    address: "Kurnool, Andhra Pradesh",
    distance: "4.2 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.1,
    ratingCount: 168,
    open: true,
    openHours: "9 AM - 5 PM",
    phone: "+91 8518 456789",
    specialty: ["Ophthalmology", "Eye Surgery", "Vision Care"],
    hospitalType: "government"
  }
];

// Private Hospitals in Kurnool District
export const privateKurnoolHospitals: Hospital[] = [
  {
    id: "ku-prv-01",
    name: "KIMS Hospital",
    address: "Kurnool, Andhra Pradesh",
    distance: "2.4 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.5,
    ratingCount: 320,
    open: true,
    openHours: "24 hours",
    phone: "+91 8518 567890",
    specialty: ["Multi-Specialty", "Emergency", "Critical Care", "Cardiology"],
    hospitalType: "private"
  },
  {
    id: "ku-prv-02",
    name: "Medicover Hospitals",
    address: "Kurnool, Andhra Pradesh",
    distance: "3.1 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.4,
    ratingCount: 285,
    open: true,
    openHours: "24 hours",
    phone: "+91 8518 678901",
    specialty: ["Multi-Specialty", "Emergency", "Cardiology", "Neurology"],
    hospitalType: "private"
  },
  {
    id: "ku-prv-03",
    name: "Gowri Gopal Hospital",
    address: "Kurnool, Andhra Pradesh",
    distance: "2.7 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.2,
    ratingCount: 198,
    open: true,
    openHours: "8 AM - 9 PM",
    phone: "+91 8518 789012",
    specialty: ["General Medicine", "Pediatrics", "Gynecology"],
    hospitalType: "private"
  },
  {
    id: "ku-prv-04",
    name: "Vasan Eye Care",
    address: "Kurnool, Andhra Pradesh",
    distance: "3.8 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.3,
    ratingCount: 242,
    open: true,
    openHours: "9 AM - 7 PM",
    phone: "+91 8518 890123",
    specialty: ["Ophthalmology", "Eye Surgery", "Vision Care"],
    hospitalType: "private"
  }
];

export const kurnoolHospitals: Hospital[] = [
  ...governmentKurnoolHospitals,
  ...privateKurnoolHospitals
];
