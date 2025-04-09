
import { Hospital } from "@/data/hospitals/types";
import { v4 as uuidv4 } from "uuid";

export const telanganaHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: uuidv4(),
    name: "All India Institute of Medical Sciences (AIIMS), Bibinagar",
    address: "Bibinagar, Yadadri Bhuvanagiri, Telangana",
    phone: "08685-230778",
    specialty: ["General Medicine", "Surgery", "Cardiology", "Neurology", "Orthopedics"],
    openHours: "24 hours",
    rating: 4.4,
    ratingCount: 260,
    image: "https://images.onlymyhealth.com/imported/images/2021/June/16_Jun_2021/HomeICU_big.jpg",
    hospitalType: "government",
    distance: "5.3 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Osmania General Hospital, Hyderabad",
    address: "Afzalgunj, Hyderabad, Telangana",
    phone: "040-24600122",
    specialty: ["General Medicine", "Pediatrics", "Gynecology", "Orthopedics", "ENT"],
    openHours: "24 hours",
    rating: 4.0,
    ratingCount: 235,
    image: "https://c8.alamy.com/comp/RATKP4/regions-hospital-building-showing-the-emergency-room-entrance-in-front-st-paul-minnesota-mn-usa-RATKP4.jpg",
    hospitalType: "government",
    distance: "3.1 km",
    open: true
  },
  
  // Private Hospitals
  {
    id: uuidv4(),
    name: "Krishna Institute of Medical Sciences (KIMS), Secunderabad",
    address: "Minister Road, Secunderabad, Telangana",
    phone: "040-44885000",
    specialty: ["Cardiology", "Neurosurgery", "Orthopedics", "Oncology", "Transplant Services"],
    openHours: "24 hours",
    rating: 4.7,
    ratingCount: 340,
    image: "https://nsmot.com/wp-content/uploads/2019/05/Modern-modular-operation-theatre-2-5030x2515.jpg",
    hospitalType: "private",
    distance: "4.2 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Apollo Hospitals, Hyderabad",
    address: "Jubilee Hills, Hyderabad, Telangana",
    phone: "040-23607777",
    specialty: ["Cardiology", "Orthopedics", "Neurosciences", "Oncology", "Renal Sciences"],
    openHours: "24 hours",
    rating: 4.8,
    ratingCount: 380,
    image: "https://www.mjpaia.com/wp-content/uploads/2012/06/SVMC-ER-MainOperatingRoom-e1338921334793-940x626.jpg",
    hospitalType: "private",
    distance: "5.5 km",
    open: true
  }
];
