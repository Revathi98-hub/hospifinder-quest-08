
import { Hospital } from "./types";

// Uttar Pradesh hospitals
export const uttarPradeshHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "up_gov1",
    name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGI), Lucknow",
    address: "Raebareli Road, Lucknow, Uttar Pradesh",
    distance: "8.5 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.6,
    ratingCount: 480,
    open: true,
    openHours: "24 hours",
    phone: "+91 522 2494000",
    specialty: ["Multi-Specialty", "Nephrology", "Gastroenterology", "Neurology"],
    hospitalType: "government"
  },
  {
    id: "up_gov2",
    name: "King George's Medical University (KGMU), Lucknow",
    address: "Shahmina Road, Lucknow, Uttar Pradesh",
    distance: "5.2 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.3,
    ratingCount: 420,
    open: true,
    openHours: "24 hours",
    phone: "+91 522 2258200",
    specialty: ["General Medicine", "Surgery", "Orthopedics"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "up_pvt1",
    name: "Fortis Hospital, Noida",
    address: "B-22, Sector 62, Noida, Uttar Pradesh",
    distance: "6.8 km",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.5,
    ratingCount: 460,
    open: true,
    openHours: "24 hours",
    phone: "+91 120 4300222",
    specialty: ["Multi-Specialty", "Cardiology", "Orthopedics", "Gastroenterology"],
    hospitalType: "private"
  },
  {
    id: "up_pvt2",
    name: "Max Super Speciality Hospital, Vaishali",
    address: "W-3, Sector 1, Vaishali, Ghaziabad, Uttar Pradesh",
    distance: "7.2 km",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    ratingCount: 480,
    open: true,
    openHours: "24 hours",
    phone: "+91 120 7173000",
    specialty: ["Multi-Specialty", "Cardiac Sciences", "Neurosciences", "Oncology"],
    hospitalType: "private"
  }
];
