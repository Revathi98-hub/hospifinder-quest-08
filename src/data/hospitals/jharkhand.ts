
import { Hospital } from "@/data/hospitals/types";
import { v4 as uuidv4 } from "uuid";

export const jharkhandHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: uuidv4(),
    name: "Rajendra Institute of Medical Sciences (RIMS), Ranchi",
    address: "Bariatu, Ranchi, Jharkhand",
    phone: "0651-2545555",
    specialty: ["General Medicine", "Surgery", "Cardiology", "Neurology", "Orthopedics"],
    openHours: "24 hours",
    rating: 4.0,
    ratingCount: 225,
    image: "https://images.onlymyhealth.com/imported/images/2021/June/16_Jun_2021/HomeICU_big.jpg",
    hospitalType: "government",
    distance: "3.2 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Patliputra Medical College and Hospital, Dhanbad",
    address: "Dhanbad, Jharkhand",
    phone: "0326-2230465",
    specialty: ["General Medicine", "Pediatrics", "Gynecology", "Orthopedics", "ENT"],
    openHours: "24 hours",
    rating: 3.8,
    ratingCount: 180,
    image: "https://c8.alamy.com/comp/RATKP4/regions-hospital-building-showing-the-emergency-room-entrance-in-front-st-paul-minnesota-mn-usa-RATKP4.jpg",
    hospitalType: "government",
    distance: "2.9 km",
    open: true
  },
  
  // Private Hospitals
  {
    id: uuidv4(),
    name: "Meherbai Tata Memorial Hospital, Jamshedpur",
    address: "Northern Town, Jamshedpur, Jharkhand",
    phone: "0657-2431071",
    specialty: ["Cardiology", "Oncology", "Orthopedics", "Neurology", "General Surgery"],
    openHours: "24 hours",
    rating: 4.6,
    ratingCount: 270,
    image: "https://nsmot.com/wp-content/uploads/2019/05/Modern-modular-operation-theatre-2-5030x2515.jpg",
    hospitalType: "private",
    distance: "4.5 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Raj Hospitals, Ranchi",
    address: "Harmu Road, Ranchi, Jharkhand",
    phone: "0651-2248888",
    specialty: ["Cardiology", "Orthopedics", "Neurology", "Gastroenterology", "Urology"],
    openHours: "24 hours",
    rating: 4.4,
    ratingCount: 230,
    image: "https://www.mjpaia.com/wp-content/uploads/2012/06/SVMC-ER-MainOperatingRoom-e1338921334793-940x626.jpg",
    hospitalType: "private",
    distance: "3.7 km",
    open: true
  }
];
