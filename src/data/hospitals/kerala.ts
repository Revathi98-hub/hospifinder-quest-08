
import { Hospital } from "./types";

// Kerala hospitals
export const keralaHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "kerala_gov1",
    name: "Government Medical College, Thiruvananthapuram",
    address: "Medical College Road, Thiruvananthapuram, Kerala",
    distance: "3.6 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.3,
    ratingCount: 380,
    open: true,
    openHours: "24 hours",
    phone: "+91 471 2528300",
    specialty: ["General Medicine", "Surgery", "Pediatrics"],
    hospitalType: "government"
  },
  {
    id: "kerala_gov2",
    name: "Government Medical College, Kozhikode",
    address: "Medical College Road, Kozhikode, Kerala",
    distance: "4.2 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.2,
    ratingCount: 360,
    open: true,
    openHours: "24 hours",
    phone: "+91 495 2350216",
    specialty: ["General Medicine", "Surgery", "Orthopedics"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "kerala_pvt1",
    name: "Amrita Institute of Medical Sciences (AIMS), Kochi",
    address: "Ponekkara P.O, Kochi, Kerala",
    distance: "6.8 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.7,
    ratingCount: 520,
    open: true,
    openHours: "24 hours",
    phone: "+91 484 2801234",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology", "Oncology"],
    hospitalType: "private"
  },
  {
    id: "kerala_pvt2",
    name: "Aster Medcity, Kochi",
    address: "Aster Medcity, Cheranalloor, Kochi, Kerala",
    distance: "7.2 km",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    ratingCount: 490,
    open: true,
    openHours: "24 hours",
    phone: "+91 484 6699999",
    specialty: ["Multi-Specialty", "Cardiac Sciences", "Neurosciences", "Gastroenterology"],
    hospitalType: "private"
  }
];
