
import { Hospital } from "./types";

// Rajasthan hospitals
export const rajasthanHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "rajasthan_gov1",
    name: "Sawai Man Singh (SMS) Hospital, Jaipur",
    address: "JLN Marg, Jaipur, Rajasthan",
    distance: "3.5 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.3,
    ratingCount: 410,
    open: true,
    openHours: "24 hours",
    phone: "+91 141 2518291",
    specialty: ["General Medicine", "Surgery", "Orthopedics"],
    hospitalType: "government"
  },
  {
    id: "rajasthan_gov2",
    name: "Dr. S.N. Medical College and Hospital, Jodhpur",
    address: "Residency Road, Jodhpur, Rajasthan",
    distance: "4.2 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.1,
    ratingCount: 370,
    open: true,
    openHours: "24 hours",
    phone: "+91 291 2434374",
    specialty: ["General Medicine", "Emergency", "Pediatrics"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "rajasthan_pvt1",
    name: "Fortis Escorts Hospital, Jaipur",
    address: "Malviya Nagar, Jaipur, Rajasthan",
    distance: "6.8 km",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    ratingCount: 480,
    open: true,
    openHours: "24 hours",
    phone: "+91 141 4258888",
    specialty: ["Multi-Specialty", "Cardiology", "Orthopedics", "Neurology"],
    hospitalType: "private"
  },
  {
    id: "rajasthan_pvt2",
    name: "Narayana Multispeciality Hospital, Jaipur",
    address: "Sector 28, Kumbha Marg, Jaipur, Rajasthan",
    distance: "7.5 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80",
    rating: 4.5,
    ratingCount: 450,
    open: true,
    openHours: "24 hours",
    phone: "+91 141 4304000",
    specialty: ["Multi-Specialty", "Cardiology", "Cardiac Surgery", "Orthopedics"],
    hospitalType: "private"
  }
];
