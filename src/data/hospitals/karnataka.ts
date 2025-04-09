
import { Hospital } from "./types";

// Karnataka hospitals
export const karnatakaHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "karnataka_gov1",
    name: "Victoria Hospital, Bengaluru",
    address: "Fort Road, K.R. Market, Bengaluru, Karnataka",
    distance: "3.1 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.2,
    ratingCount: 380,
    open: true,
    openHours: "24 hours",
    phone: "+91 80 26701150",
    specialty: ["General Medicine", "Surgery", "Emergency"],
    hospitalType: "government"
  },
  {
    id: "karnataka_gov2",
    name: "Bowring and Lady Curzon Hospital, Bengaluru",
    address: "Shivaji Nagar, Bengaluru, Karnataka",
    distance: "2.8 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.0,
    ratingCount: 320,
    open: true,
    openHours: "24 hours",
    phone: "+91 80 22867222",
    specialty: ["General Medicine", "Gynecology", "Orthopedics"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "karnataka_pvt1",
    name: "Narayana Health, Bengaluru",
    address: "No. 258/A, Bommasandra Industrial Area, Anekal Taluk, Bengaluru, Karnataka",
    distance: "8.5 km",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.7,
    ratingCount: 520,
    open: true,
    openHours: "24 hours",
    phone: "+91 80 71222222",
    specialty: ["Cardiology", "Cardiac Surgery", "Neurology", "Nephrology"],
    hospitalType: "private"
  },
  {
    id: "karnataka_pvt2",
    name: "Manipal Hospitals, Bengaluru",
    address: "98, HAL Airport Road, Bengaluru, Karnataka",
    distance: "6.2 km",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    ratingCount: 490,
    open: true,
    openHours: "24 hours",
    phone: "+91 80 25023000",
    specialty: ["Multi-Specialty", "Orthopedics", "Neurosurgery", "Oncology"],
    hospitalType: "private"
  }
];
