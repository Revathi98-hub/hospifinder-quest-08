
import { Hospital } from "@/data/hospitals/types";
import { v4 as uuidv4 } from "uuid";

export const himachalPradeshHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: uuidv4(),
    name: "Indira Gandhi Medical College (IGMC), Shimla",
    address: "Ridge, Shimla, Himachal Pradesh",
    phone: "0177-2804251",
    specialty: ["General Medicine", "Surgery", "Cardiology", "Neurology", "Orthopedics"],
    openHours: "24 hours",
    rating: 4.2,
    ratingCount: 235,
    image: "https://images.onlymyhealth.com/imported/images/2021/June/16_Jun_2021/HomeICU_big.jpg",
    hospitalType: "government",
    distance: "2.5 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Dr. Rajendra Prasad Government Medical College, Kangra",
    address: "Tanda, Kangra, Himachal Pradesh",
    phone: "01892-267115",
    specialty: ["General Medicine", "Pediatrics", "Gynecology", "Orthopedics", "ENT"],
    openHours: "24 hours",
    rating: 4.1,
    ratingCount: 190,
    image: "https://c8.alamy.com/comp/RATKP4/regions-hospital-building-showing-the-emergency-room-entrance-in-front-st-paul-minnesota-mn-usa-RATKP4.jpg",
    hospitalType: "government",
    distance: "3.8 km",
    open: true
  },
  
  // Private Hospitals
  {
    id: uuidv4(),
    name: "Fortis Hospital, Kangra",
    address: "Kangra, Himachal Pradesh",
    phone: "01892-242560",
    specialty: ["Cardiology", "Orthopedics", "Neurology", "Gastroenterology", "Urology"],
    openHours: "24 hours",
    rating: 4.5,
    ratingCount: 255,
    image: "https://nsmot.com/wp-content/uploads/2019/05/Modern-modular-operation-theatre-2-5030x2515.jpg",
    hospitalType: "private",
    distance: "4.3 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Shri Balaji Hospital, Kangra",
    address: "Kangra, Himachal Pradesh",
    phone: "01892-234567",
    specialty: ["Cardiology", "Orthopedics", "General Surgery", "Internal Medicine", "Pediatrics"],
    openHours: "24 hours",
    rating: 4.3,
    ratingCount: 215,
    image: "https://www.mjpaia.com/wp-content/uploads/2012/06/SVMC-ER-MainOperatingRoom-e1338921334793-940x626.jpg",
    hospitalType: "private",
    distance: "3.9 km",
    open: true
  }
];
