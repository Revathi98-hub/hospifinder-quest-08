
import { Hospital } from "./types";

// Gujarat hospitals
export const gujaratHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "gujarat_gov1",
    name: "Civil Hospital, Ahmedabad",
    address: "Asarwa, Ahmedabad, Gujarat",
    distance: "3.4 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.2,
    ratingCount: 380,
    open: true,
    openHours: "24 hours",
    phone: "+91 79 22683721",
    specialty: ["General Medicine", "Surgery", "Orthopedics"],
    hospitalType: "government"
  },
  {
    id: "gujarat_gov2",
    name: "Sir T General Hospital, Bhavnagar",
    address: "Jail Road, Bhavnagar, Gujarat",
    distance: "2.7 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.0,
    ratingCount: 320,
    open: true,
    openHours: "24 hours",
    phone: "+91 278 2422011",
    specialty: ["General Medicine", "Emergency", "Pediatrics"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "gujarat_pvt1",
    name: "Zydus Hospitals, Ahmedabad",
    address: "Zydus Hospital Road, Thaltej, Ahmedabad, Gujarat",
    distance: "7.5 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80",
    rating: 4.6,
    ratingCount: 480,
    open: true,
    openHours: "24 hours",
    phone: "+91 79 66701000",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology", "Gastroenterology"],
    hospitalType: "private"
  },
  {
    id: "gujarat_pvt2",
    name: "Sterling Hospitals, Ahmedabad",
    address: "Sterling Hospital Road, Gurukul, Ahmedabad, Gujarat",
    distance: "6.2 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.5,
    ratingCount: 450,
    open: true,
    openHours: "24 hours",
    phone: "+91 79 40011000",
    specialty: ["Multi-Specialty", "Cardiac Care", "Orthopedics", "Urology"],
    hospitalType: "private"
  }
];
