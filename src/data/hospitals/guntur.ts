
import { Hospital } from "./types";

// Guntur District hospitals
export const gunturHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "guntur_gov1",
    name: "Government General Hospital",
    address: "Samabasiva Pet, Guntur, Andhra Pradesh",
    distance: "1.5 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.2,
    ratingCount: 325,
    open: true,
    openHours: "24 hours",
    phone: "+91 863 2234567",
    specialty: ["General Medicine", "Emergency", "Surgery", "Orthopedics"],
    hospitalType: "government"
  },
  {
    id: "guntur_gov2",
    name: "Government General Hospital",
    address: "MV Road, Guntur, Andhra Pradesh",
    distance: "2.3 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.0,
    ratingCount: 289,
    open: true,
    openHours: "24 hours",
    phone: "+91 863 2245678",
    specialty: ["General Medicine", "Emergency", "Pediatrics"],
    hospitalType: "government"
  },
  {
    id: "guntur_gov3",
    name: "Guntur GGH OP Block",
    address: "Railpet, Guntur, Andhra Pradesh",
    distance: "1.9 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.1,
    ratingCount: 276,
    open: true,
    openHours: "8:00 AM - 4:00 PM",
    phone: "+91 863 2256789",
    specialty: ["General Medicine", "Outpatient Services"],
    hospitalType: "government"
  },
  {
    id: "guntur_gov4",
    name: "Government Fever Hospital",
    address: "Gorantla, Guntur, Andhra Pradesh",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 3.9,
    ratingCount: 215,
    open: true,
    openHours: "24 hours",
    phone: "+91 863 2267890",
    specialty: ["Infectious Diseases", "Fever Treatment", "General Medicine"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "guntur_pvt1",
    name: "Tulasi Multi Speciality Hospital",
    address: "Kothapeta, Guntur, Andhra Pradesh",
    distance: "2.5 km",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.5,
    ratingCount: 357,
    open: true,
    openHours: "24 hours",
    phone: "+91 863 2278901",
    specialty: ["Multi-Specialty", "Cardiology", "Orthopedics", "Gastroenterology"],
    hospitalType: "private"
  },
  {
    id: "guntur_pvt2",
    name: "Narayana Superspeciality Hospital",
    address: "Old Club Road, Kothapeta, Guntur, Andhra Pradesh",
    distance: "2.8 km",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.7,
    ratingCount: 412,
    open: true,
    openHours: "24 hours",
    phone: "+91 863 2289012",
    specialty: ["Cardiology", "Neurology", "Oncology", "Nephrology"],
    hospitalType: "private"
  },
  {
    id: "guntur_pvt3",
    name: "Aster Ramesh Hospitals",
    address: "Collector Office Road, Guntur, Andhra Pradesh",
    distance: "3.1 km",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    ratingCount: 385,
    open: true,
    openHours: "24 hours",
    phone: "+91 863 2290123",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology", "Urology"],
    hospitalType: "private"
  },
  {
    id: "guntur_pvt4",
    name: "Coastal Care Hospital",
    address: "Old Club Road, Guntur, Andhra Pradesh",
    distance: "2.9 km",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.3,
    ratingCount: 325,
    open: true,
    openHours: "24 hours",
    phone: "+91 863 2301234",
    specialty: ["Multi-Specialty", "Emergency", "Internal Medicine", "Orthopedics"],
    hospitalType: "private"
  },
  {
    id: "guntur_pvt5",
    name: "Vikaas Hospitals",
    address: "Collector Office Road, Guntur, Andhra Pradesh",
    distance: "3.3 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80",
    rating: 4.4,
    ratingCount: 344,
    open: true,
    openHours: "24 hours",
    phone: "+91 863 2312345",
    specialty: ["Multi-Specialty", "Neurology", "Gastroenterology", "Pediatrics"],
    hospitalType: "private"
  }
];
