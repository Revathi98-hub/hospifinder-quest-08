
import { Hospital } from "@/data/hospitals/types";
import { v4 as uuidv4 } from "uuid";

export const haryanaHospitals: Hospital[] = [
  {
    id: uuidv4(),
    name: "PGIMS Rohtak",
    address: "Medical Campus, Rohtak, Haryana",
    phone: "01262-281307",
    specialty: ["General Medicine", "Surgery", "Cardiology", "Neurology", "Orthopedics"],
    openHours: "24 hours",
    rating: 4.2,
    ratingCount: 230,
    image: "https://images.onlymyhealth.com/imported/images/2021/June/16_Jun_2021/HomeICU_big.jpg",
    hospitalType: "government",
    distance: "3.8 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Civil Hospital, Gurgaon",
    address: "Civil Lines, Gurugram, Haryana",
    phone: "0124-2222465",
    specialty: ["General Medicine", "Pediatrics", "Gynecology", "Orthopedics", "ENT"],
    openHours: "24 hours",
    rating: 3.8,
    ratingCount: 178,
    image: "https://c8.alamy.com/comp/RATKP4/regions-hospital-building-showing-the-emergency-room-entrance-in-front-st-paul-minnesota-mn-usa-RATKP4.jpg",
    hospitalType: "government",
    distance: "2.5 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Medanta – The Medicity",
    address: "Sector 38, Gurugram, Haryana",
    phone: "0124-4141414",
    specialty: ["Cardiology", "Neurosurgery", "Oncology", "Transplant Services", "Orthopedics"],
    openHours: "24 hours",
    rating: 4.8,
    ratingCount: 315,
    image: "https://nsmot.com/wp-content/uploads/2019/05/Modern-modular-operation-theatre-2-5030x2515.jpg",
    hospitalType: "private",
    distance: "5.3 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Artemis Hospital",
    address: "Sector 51, Gurugram, Haryana",
    phone: "0124-6767999",
    specialty: ["Cardiology", "Orthopedics", "Neurosciences", "Oncology", "Women's Health"],
    openHours: "24 hours",
    rating: 4.7,
    ratingCount: 252,
    image: "https://www.mjpaia.com/wp-content/uploads/2012/06/SVMC-ER-MainOperatingRoom-e1338921334793-940x626.jpg",
    hospitalType: "private",
    distance: "4.7 km",
    open: true
  }
];
