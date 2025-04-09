
import { Hospital } from "./types";

// West Bengal hospitals
export const westBengalHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "wb_gov1",
    name: "Calcutta Medical College and Hospital, Kolkata",
    address: "College Street, Kolkata, West Bengal",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.2,
    ratingCount: 380,
    open: true,
    openHours: "24 hours",
    phone: "+91 33 22551621",
    specialty: ["General Medicine", "Surgery", "Orthopedics"],
    hospitalType: "government"
  },
  {
    id: "wb_gov2",
    name: "NRS Medical College and Hospital, Kolkata",
    address: "138, AJC Bose Road, Kolkata, West Bengal",
    distance: "4.5 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.1,
    ratingCount: 360,
    open: true,
    openHours: "24 hours",
    phone: "+91 33 22891101",
    specialty: ["General Medicine", "Emergency", "Pediatrics"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "wb_pvt1",
    name: "Tata Medical Center, Kolkata",
    address: "14, MAR(E-W), New Town, Rajarhat, Kolkata, West Bengal",
    distance: "12.5 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.7,
    ratingCount: 490,
    open: true,
    openHours: "24 hours",
    phone: "+91 33 66057000",
    specialty: ["Oncology", "Cancer Care", "Radiation Therapy"],
    hospitalType: "private"
  },
  {
    id: "wb_pvt2",
    name: "AMRI Hospitals, Kolkata",
    address: "JC 16-17, Salt Lake City, Sector III, Kolkata, West Bengal",
    distance: "8.2 km",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.5,
    ratingCount: 450,
    open: true,
    openHours: "24 hours",
    phone: "+91 33 66800000",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology", "Orthopedics"],
    hospitalType: "private"
  }
];
