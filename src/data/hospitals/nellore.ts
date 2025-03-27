
import { Hospital } from "./types";

// Nellore District hospitals
export const nelloreHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "nellore_gov1",
    name: "A.C. Subbareddy Government General Hospital",
    address: "Nellore, Andhra Pradesh",
    distance: "2.3 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.4,
    ratingCount: 356,
    open: true,
    openHours: "24 hours",
    phone: "+91 861 2323456",
    specialty: ["General Medicine", "Emergency", "Surgery", "Orthopedics"],
    hospitalType: "government"
  },
  {
    id: "nellore_gov2",
    name: "Area Hospital, Atmakur",
    address: "Nellore, Andhra Pradesh",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1578991624414-df826339aca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 4.1,
    ratingCount: 234,
    open: true,
    openHours: "24 hours",
    phone: "+91 861 2334567",
    specialty: ["General Medicine", "Emergency", "Pediatrics"],
    hospitalType: "government"
  },
  {
    id: "nellore_gov3",
    name: "Area Hospital, Kavali",
    address: "Nellore, Andhra Pradesh",
    distance: "2.9 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.2,
    ratingCount: 278,
    open: true,
    openHours: "24 hours",
    phone: "+91 861 2345678",
    specialty: ["General Medicine", "Emergency", "Gynecology"],
    hospitalType: "government"
  },
  {
    id: "nellore_gov4",
    name: "Community Health Centre (CHC), Allur",
    address: "Allur, Nellore, Andhra Pradesh",
    distance: "4.1 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 3.9,
    ratingCount: 187,
    open: true,
    openHours: "24 hours",
    phone: "+91 861 2367890",
    specialty: ["Primary Care", "Family Medicine", "Maternal Health"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "nellore_pvt1",
    name: "V.S. Reddy Advanced Endoscopy Centre and Hospital",
    address: "Nellore, Andhra Pradesh",
    distance: "2.5 km",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.6,
    ratingCount: 324,
    open: true,
    openHours: "24 hours",
    phone: "+91 861 2356789",
    specialty: ["Gastroenterology", "Endoscopy", "General Medicine"],
    hospitalType: "private"
  },
  {
    id: "nellore_pvt2",
    name: "Dr. Madhusudana Sastry Hospital",
    address: "Nellore, Andhra Pradesh",
    distance: "3.1 km",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.5,
    ratingCount: 287,
    open: true,
    openHours: "24 hours",
    phone: "+91 861 2367890",
    specialty: ["Multi-Specialty", "Cardiology", "Orthopedics"],
    hospitalType: "private"
  },
  {
    id: "nellore_pvt3",
    name: "A.V.S. Hospital",
    address: "Nellore, Andhra Pradesh",
    distance: "2.7 km",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.3,
    ratingCount: 256,
    open: true,
    openHours: "24 hours",
    phone: "+91 861 2378901",
    specialty: ["General Medicine", "Gynecology", "Pediatrics"],
    hospitalType: "private"
  }
];
