
import { Hospital } from "./types";

// Maharashtra hospitals
export const maharashtraHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "maharashtra_gov1",
    name: "AIIMS, Nagpur",
    address: "Plot No.2, Sector - 20, MIHAN, Nagpur, Maharashtra",
    distance: "5.2 km",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.5,
    ratingCount: 420,
    open: true,
    openHours: "24 hours",
    phone: "+91 712 2234567",
    specialty: ["General Medicine", "Surgery", "Orthopedics", "Neurology"],
    hospitalType: "government"
  },
  {
    id: "maharashtra_gov2",
    name: "Sassoon General Hospital, Pune",
    address: "Sassoon Road, Pune, Maharashtra",
    distance: "3.8 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.2,
    ratingCount: 380,
    open: true,
    openHours: "24 hours",
    phone: "+91 20 26128000",
    specialty: ["General Medicine", "Emergency", "Orthopedics"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "maharashtra_pvt1",
    name: "Tata Memorial Hospital, Mumbai",
    address: "Dr Ernest Borges Marg, Parel, Mumbai, Maharashtra",
    distance: "4.3 km",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    rating: 4.7,
    ratingCount: 520,
    open: true,
    openHours: "24 hours",
    phone: "+91 22 24177000",
    specialty: ["Oncology", "Cancer Care", "Radiation Therapy"],
    hospitalType: "private"
  },
  {
    id: "maharashtra_pvt2",
    name: "Kokilaben Dhirubhai Ambani Hospital, Mumbai",
    address: "Rao Saheb Achutrao Patwardhan Marg, Four Bungalows, Andheri West, Mumbai, Maharashtra",
    distance: "6.1 km",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    ratingCount: 480,
    open: true,
    openHours: "24 hours",
    phone: "+91 22 30999999",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology", "Oncology"],
    hospitalType: "private"
  }
];
