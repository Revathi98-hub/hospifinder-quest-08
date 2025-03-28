
import { Hospital } from "@/data/hospitals/types";
import { v4 as uuidv4 } from "uuid";

export const goaHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: uuidv4(),
    name: "Goa Medical College and Hospital (GMCH), Panaji",
    address: "Bambolim, Panaji, Goa",
    phone: "0832-2495000",
    specialty: ["General Medicine", "Surgery", "Cardiology", "Neurology", "Orthopedics"],
    openHours: "24 hours",
    rating: 4.3,
    ratingCount: 245,
    image: "https://images.onlymyhealth.com/imported/images/2021/June/16_Jun_2021/HomeICU_big.jpg",
    hospitalType: "government",
    distance: "3.5 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "North Goa District Hospital, Mapusa",
    address: "Mapusa, North Goa, Goa",
    phone: "0832-2262372",
    specialty: ["General Medicine", "Pediatrics", "Gynecology", "Orthopedics", "ENT"],
    openHours: "24 hours",
    rating: 3.9,
    ratingCount: 175,
    image: "https://c8.alamy.com/comp/RATKP4/regions-hospital-building-showing-the-emergency-room-entrance-in-front-st-paul-minnesota-mn-usa-RATKP4.jpg",
    hospitalType: "government",
    distance: "2.7 km",
    open: true
  },
  
  // Private Hospitals
  {
    id: uuidv4(),
    name: "Victor Hospital, Margao",
    address: "Margao, South Goa, Goa",
    phone: "0832-6698888",
    specialty: ["Cardiology", "Orthopedics", "Urology", "Gastroenterology", "General Surgery"],
    openHours: "24 hours",
    rating: 4.6,
    ratingCount: 280,
    image: "https://nsmot.com/wp-content/uploads/2019/05/Modern-modular-operation-theatre-2-5030x2515.jpg",
    hospitalType: "private",
    distance: "4.2 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Manipal Hospitals, Dona Paula",
    address: "Dona Paula, Panaji, Goa",
    phone: "0832-2456789",
    specialty: ["Cardiology", "Neurosurgery", "Orthopedics", "Oncology", "Pediatrics"],
    openHours: "24 hours",
    rating: 4.8,
    ratingCount: 310,
    image: "https://www.mjpaia.com/wp-content/uploads/2012/06/SVMC-ER-MainOperatingRoom-e1338921334793-940x626.jpg",
    hospitalType: "private",
    distance: "5.1 km",
    open: true
  }
];
