
import { Hospital } from "./types";

// Government Hospitals in Krishna District
export const governmentKrishnaHospitals: Hospital[] = [
  {
    id: "k-gov-01",
    name: "Jaggayyapeta Government Hospital",
    address: "Jaggayyapeta, Krishna District, Andhra Pradesh",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 3.8,
    ratingCount: 124,
    open: true,
    openHours: "24 hours",
    phone: "+91 8648 123456",
    specialty: ["General Medicine", "Emergency"],
    hospitalType: "government"
  },
  {
    id: "k-gov-02",
    name: "Government General Hospital Machilipatnam",
    address: "Machilipatnam, Krishna District, Andhra Pradesh",
    distance: "2.5 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.0,
    ratingCount: 256,
    open: true,
    openHours: "24 hours",
    phone: "+91 8672 245678",
    specialty: ["General Medicine", "Pediatrics", "Emergency"],
    hospitalType: "government"
  }
];

// Private Hospitals in Krishna District
export const privateKrishnaHospitals: Hospital[] = [
  {
    id: "k-prv-01",
    name: "Anu Institute of Neuro and Cardiac Sciences",
    address: "Krishna District, Andhra Pradesh",
    distance: "4.1 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.5,
    ratingCount: 312,
    open: true,
    openHours: "9 AM - 8 PM",
    phone: "+91 8648 987654",
    specialty: ["Neurology", "Cardiology", "Cardiac Surgery"],
    hospitalType: "private"
  },
  {
    id: "k-prv-02",
    name: "Mahitha NRI Hospital",
    address: "Krishna District, Andhra Pradesh",
    distance: "3.7 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.3,
    ratingCount: 276,
    open: true,
    openHours: "24 hours",
    phone: "+91 8648 567890",
    specialty: ["Multi-Specialty", "Emergency", "Critical Care"],
    hospitalType: "private"
  },
  {
    id: "k-prv-03",
    name: "Sri Chinmaya Multispeciality Hospital",
    address: "Krishna District, Andhra Pradesh",
    distance: "5.2 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.2,
    ratingCount: 198,
    open: true,
    openHours: "8 AM - 9 PM",
    phone: "+91 8648 345678",
    specialty: ["Multi-Specialty", "Orthopedics", "Pediatrics"],
    hospitalType: "private"
  },
  {
    id: "k-prv-04",
    name: "Dr Madhu Super Speciality Hospital",
    address: "Krishna District, Andhra Pradesh",
    distance: "2.8 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.4,
    ratingCount: 224,
    open: true,
    openHours: "9 AM - 7 PM",
    phone: "+91 8648 456789",
    specialty: ["Super Specialty", "Neurology", "Cardiology"],
    hospitalType: "private"
  },
  {
    id: "k-prv-05",
    name: "Carewell Hospital",
    address: "Krishna District, Andhra Pradesh",
    distance: "3.5 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    rating: 4.1,
    ratingCount: 156,
    open: true,
    openHours: "24 hours",
    phone: "+91 8648 234567",
    specialty: ["General Medicine", "Emergency", "Critical Care"],
    hospitalType: "private"
  },
  {
    id: "k-prv-06",
    name: "Venkateswara Mother and Child Hospital",
    address: "Krishna District, Andhra Pradesh",
    distance: "4.6 km",
    image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.6,
    ratingCount: 342,
    open: true,
    openHours: "24 hours",
    phone: "+91 8648 678901",
    specialty: ["Maternity", "Pediatrics", "Neonatology"],
    hospitalType: "private"
  },
  {
    id: "k-prv-07",
    name: "Mohan Rao Memorial Super Speciality Hospital",
    address: "Krishna District, Andhra Pradesh",
    distance: "3.9 km",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWgefHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.3,
    ratingCount: 287,
    open: true,
    openHours: "8 AM - 8 PM",
    phone: "+91 8648 567123",
    specialty: ["Super Specialty", "Oncology", "Cardiology"],
    hospitalType: "private"
  }
];

export const krishnaHospitals: Hospital[] = [
  ...governmentKrishnaHospitals,
  ...privateKrishnaHospitals
];

