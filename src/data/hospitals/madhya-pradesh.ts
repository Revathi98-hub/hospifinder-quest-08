
import { Hospital } from "@/data/hospitals/types";
import { v4 as uuidv4 } from "uuid";

export const madhyaPradeshHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: uuidv4(),
    name: "All India Institute of Medical Sciences (AIIMS), Bhopal",
    address: "Saket Nagar, Bhopal, Madhya Pradesh",
    phone: "0755-2672355",
    specialty: ["General Medicine", "Surgery", "Cardiology", "Neurology", "Orthopedics"],
    openHours: "24 hours",
    rating: 4.5,
    ratingCount: 285,
    image: "https://images.onlymyhealth.com/imported/images/2021/June/16_Jun_2021/HomeICU_big.jpg",
    hospitalType: "government",
    distance: "4.8 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Maharaja Yeshwantrao Hospital, Indore",
    address: "MY Hospital Road, Indore, Madhya Pradesh",
    phone: "0731-2527383",
    specialty: ["General Medicine", "Pediatrics", "Gynecology", "Orthopedics", "ENT"],
    openHours: "24 hours",
    rating: 4.1,
    ratingCount: 240,
    image: "https://c8.alamy.com/comp/RATKP4/regions-hospital-building-showing-the-emergency-room-entrance-in-front-st-paul-minnesota-mn-usa-RATKP4.jpg",
    hospitalType: "government",
    distance: "2.5 km",
    open: true
  },
  
  // Private Hospitals
  {
    id: uuidv4(),
    name: "Choithram Hospital and Research Centre, Indore",
    address: "Manik Bagh Road, Indore, Madhya Pradesh",
    phone: "0731-2470470",
    specialty: ["Cardiology", "Neurosurgery", "Orthopedics", "Oncology", "Nephrology"],
    openHours: "24 hours",
    rating: 4.7,
    ratingCount: 325,
    image: "https://nsmot.com/wp-content/uploads/2019/05/Modern-modular-operation-theatre-2-5030x2515.jpg",
    hospitalType: "private",
    distance: "3.9 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Apollo Hospitals, Bhopal",
    address: "Tulsi Nagar, Bhopal, Madhya Pradesh",
    phone: "0755-6784781",
    specialty: ["Cardiology", "Orthopedics", "Neurosciences", "Gastroenterology", "Oncology"],
    openHours: "24 hours",
    rating: 4.8,
    ratingCount: 310,
    image: "https://www.mjpaia.com/wp-content/uploads/2012/06/SVMC-ER-MainOperatingRoom-e1338921334793-940x626.jpg",
    hospitalType: "private",
    distance: "5.2 km",
    open: true
  }
];
