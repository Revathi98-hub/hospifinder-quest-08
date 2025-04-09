
import { Hospital } from "./types";

// Anantapur District hospitals
export const anantapurHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "anantapur_gov1",
    name: "Government General Hospital, Anantapur",
    address: "Anantapur, Andhra Pradesh",
    distance: "1.8 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.3,
    ratingCount: 312,
    open: true,
    openHours: "24 hours",
    phone: "+91 8554 222345",
    specialty: ["General Medicine", "Emergency", "Surgery", "Orthopedics"],
    hospitalType: "government"
  },
  {
    id: "anantapur_gov2",
    name: "Sri Sathya Sai General Hospital, Puttaparthi",
    address: "Puttaparthi, Anantapur, Andhra Pradesh",
    distance: "3.5 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.6,
    ratingCount: 387,
    open: true,
    openHours: "24 hours",
    phone: "+91 8555 287654",
    specialty: ["General Medicine", "Emergency", "Pediatrics", "Internal Medicine"],
    hospitalType: "government"
  },
  {
    id: "anantapur_gov3",
    name: "Sri Sathya Sai Institute of Higher Medical Sciences, Prasanthigram",
    address: "Prasanthigram, Puttaparthi, Anantapur, Andhra Pradesh",
    distance: "4.2 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.8,
    ratingCount: 542,
    open: true,
    openHours: "24 hours",
    phone: "+91 8555 287890",
    specialty: ["Cardiology", "Neurology", "Ophthalmology", "Urology"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "anantapur_pvt1",
    name: "KIMS Saveera Hospital, Anantapur",
    address: "Anantapur, Andhra Pradesh",
    distance: "2.1 km",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.5,
    ratingCount: 298,
    open: true,
    openHours: "24 hours",
    phone: "+91 8554 236789",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology", "Orthopedics"],
    hospitalType: "private"
  },
  {
    id: "anantapur_pvt2",
    name: "Apollo Hospitals, Anantapur",
    address: "Anantapur, Andhra Pradesh",
    distance: "2.7 km",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.7,
    ratingCount: 342,
    open: true,
    openHours: "24 hours",
    phone: "+91 8554 245678",
    specialty: ["Multi-Specialty", "Cardiology", "Gastroenterology", "Oncology"],
    hospitalType: "private"
  },
  {
    id: "anantapur_pvt3",
    name: "Saveera Hospital, Anantapur",
    address: "Anantapur, Andhra Pradesh",
    distance: "3.0 km",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.4,
    ratingCount: 276,
    open: true,
    openHours: "24 hours",
    phone: "+91 8554 258901",
    specialty: ["General Medicine", "Gynecology", "Orthopedics", "ENT"],
    hospitalType: "private"
  }
];
