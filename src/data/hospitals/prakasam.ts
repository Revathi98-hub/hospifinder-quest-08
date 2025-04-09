
import { Hospital } from "./types";

// Prakasam District hospitals
export const prakasamHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "prakasam_gov1",
    name: "Government General Hospital, Ongole",
    address: "Prakasam, Andhra Pradesh",
    distance: "2.1 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.3,
    ratingCount: 342,
    open: true,
    openHours: "24 hours",
    phone: "+91 892 3292111",
    specialty: ["General Medicine", "Emergency", "Surgery", "Orthopedics"],
    hospitalType: "government"
  },
  {
    id: "prakasam_gov2",
    name: "District Government Hospital, Kandukur",
    address: "Prakasam, Andhra Pradesh",
    distance: "2.8 km",
    image: "https://images.unsplash.com/photo-1578991624414-df826339aca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 4.1,
    ratingCount: 267,
    open: true,
    openHours: "24 hours",
    phone: "+91 892 3293222",
    specialty: ["General Medicine", "Emergency", "Pediatrics"],
    hospitalType: "government"
  },
  {
    id: "prakasam_gov3",
    name: "Area Hospital, Markapur",
    address: "Prakasam, Andhra Pradesh",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.0,
    ratingCount: 214,
    open: true,
    openHours: "24 hours",
    phone: "+91 892 3294333",
    specialty: ["General Medicine", "Emergency"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "prakasam_pvt1",
    name: "Aster Ramesh Hospitals, Ongole",
    address: "Prakasam, Andhra Pradesh",
    distance: "2.5 km",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.5,
    ratingCount: 378,
    open: true,
    openHours: "24 hours",
    phone: "+91 892 3295444",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology", "Orthopedics"],
    hospitalType: "private"
  },
  {
    id: "prakasam_pvt2",
    name: "Prakasam Super Speciality Hospital, Ongole",
    address: "Prakasam, Andhra Pradesh",
    distance: "3.0 km",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.4,
    ratingCount: 342,
    open: true,
    openHours: "24 hours",
    phone: "+91 892 3296555",
    specialty: ["Multi-Specialty", "Gastroenterology", "Nephrology", "Urology"],
    hospitalType: "private"
  },
  {
    id: "prakasam_pvt3",
    name: "Nalluri Nursing Home, Ongole",
    address: "Prakasam, Andhra Pradesh",
    distance: "2.2 km",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.2,
    ratingCount: 276,
    open: true,
    openHours: "24 hours",
    phone: "+91 892 3297666",
    specialty: ["General Medicine", "Gynecology", "Pediatrics"],
    hospitalType: "private"
  },
  {
    id: "prakasam_pvt4",
    name: "Ramesh Sanghamitra Hospital, Ongole",
    address: "Prakasam, Andhra Pradesh",
    distance: "3.4 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.6,
    ratingCount: 389,
    open: true,
    openHours: "24 hours",
    phone: "+91 892 3298777",
    specialty: ["Multi-Specialty", "Cardiology", "Oncology", "Orthopedics"],
    hospitalType: "private"
  },
  {
    id: "prakasam_pvt5",
    name: "KIMS Hospital, Ongole",
    address: "Prakasam, Andhra Pradesh",
    distance: "2.9 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.7,
    ratingCount: 412,
    open: true,
    openHours: "24 hours",
    phone: "+91 892 3299888",
    specialty: ["Multi-Specialty", "Neurology", "Cardiology", "Gastroenterology"],
    hospitalType: "private"
  }
];
