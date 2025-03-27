
import { Hospital } from "./types";

// Tamil Nadu hospitals
export const tamilNaduHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: "tamilnadu_gov1",
    name: "Rajiv Gandhi Government General Hospital, Chennai",
    address: "General Hospital Road, Chennai, Tamil Nadu",
    distance: "2.8 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.3,
    ratingCount: 410,
    open: true,
    openHours: "24 hours",
    phone: "+91 44 25305000",
    specialty: ["General Medicine", "Surgery", "Emergency"],
    hospitalType: "government"
  },
  {
    id: "tamilnadu_gov2",
    name: "Government Medical College Hospital, Coimbatore",
    address: "Trichy Road, Coimbatore, Tamil Nadu",
    distance: "4.5 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.1,
    ratingCount: 360,
    open: true,
    openHours: "24 hours",
    phone: "+91 422 2301393",
    specialty: ["General Medicine", "Pediatrics", "Orthopedics"],
    hospitalType: "government"
  },
  
  // Private Hospitals
  {
    id: "tamilnadu_pvt1",
    name: "Apollo Hospitals, Chennai",
    address: "No. 21, Greams Lane, Off Greams Road, Chennai, Tamil Nadu",
    distance: "3.7 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80",
    rating: 4.8,
    ratingCount: 520,
    open: true,
    openHours: "24 hours",
    phone: "+91 44 28296000",
    specialty: ["Multi-Specialty", "Cardiology", "Neurology", "Orthopedics"],
    hospitalType: "private"
  },
  {
    id: "tamilnadu_pvt2",
    name: "Fortis Malar Hospital, Chennai",
    address: "No. 52, 1st Main Road, Gandhi Nagar, Adyar, Chennai, Tamil Nadu",
    distance: "5.2 km",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    rating: 4.6,
    ratingCount: 480,
    open: true,
    openHours: "24 hours",
    phone: "+91 44 42892222",
    specialty: ["Cardiology", "Cardiac Surgery", "Vascular Surgery"],
    hospitalType: "private"
  }
];
