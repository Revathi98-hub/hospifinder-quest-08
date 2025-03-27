
import { Hospital } from "./types";

// Delhi hospitals
export const delhiHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "delhi_gov1",
    name: "AIIMS, New Delhi",
    address: "Ansari Nagar East, New Delhi, Delhi",
    distance: "4.2 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.7,
    ratingCount: 580,
    open: true,
    openHours: "24 hours",
    phone: "+91 11 26588500",
    specialty: ["Multi-Specialty", "Neurology", "Cardiology", "Oncology"],
    hospitalType: "government"
  },
  {
    id: "delhi_gov2",
    name: "Safdarjung Hospital, New Delhi",
    address: "Ansari Nagar West, New Delhi, Delhi",
    distance: "4.5 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.3,
    ratingCount: 420,
    open: true,
    openHours: "24 hours",
    phone: "+91 11 26707000",
    specialty: ["General Medicine", "Surgery", "Emergency", "Orthopedics"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "delhi_pvt1",
    name: "Max Super Speciality Hospital, Saket",
    address: "1, 2, Press Enclave Road, Saket, New Delhi, Delhi",
    distance: "7.8 km",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    ratingCount: 520,
    open: true,
    openHours: "24 hours",
    phone: "+91 11 26515050",
    specialty: ["Multi-Specialty", "Cardiac Sciences", "Neurosciences", "Orthopedics"],
    hospitalType: "private"
  },
  {
    id: "delhi_pvt2",
    name: "BLK-Max Super Speciality Hospital, New Delhi",
    address: "Pusa Road, New Delhi, Delhi",
    distance: "5.2 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80",
    rating: 4.5,
    ratingCount: 480,
    open: true,
    openHours: "24 hours",
    phone: "+91 11 30403040",
    specialty: ["Multi-Specialty", "Oncology", "Transplants", "Cardiology"],
    hospitalType: "private"
  }
];
