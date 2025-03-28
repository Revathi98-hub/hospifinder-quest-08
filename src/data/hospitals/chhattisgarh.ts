
import { Hospital } from "@/data/hospitals/types";
import { v4 as uuidv4 } from "uuid";

export const chhattisgarhHospitals: Hospital[] = [
  // Government Hospitals
  {
    id: uuidv4(),
    name: "All India Institute of Medical Sciences (AIIMS), Raipur",
    address: "GE Road, Tatibandh, Raipur, Chhattisgarh",
    phone: "0771-2573777",
    specialty: ["General Medicine", "Surgery", "Cardiology", "Neurology", "Orthopedics"],
    openHours: "24 hours",
    rating: 4.5,
    ratingCount: 275,
    image: "https://images.onlymyhealth.com/imported/images/2021/June/16_Jun_2021/HomeICU_big.jpg",
    hospitalType: "government",
    distance: "4.2 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Dr. B.R. Ambedkar Memorial Hospital, Raipur",
    address: "Jail Road, Raipur, Chhattisgarh",
    phone: "0771-2223699",
    specialty: ["General Medicine", "Pediatrics", "Gynecology", "Orthopedics", "ENT"],
    openHours: "24 hours",
    rating: 4.0,
    ratingCount: 210,
    image: "https://c8.alamy.com/comp/RATKP4/regions-hospital-building-showing-the-emergency-room-entrance-in-front-st-paul-minnesota-mn-usa-RATKP4.jpg",
    hospitalType: "government",
    distance: "2.8 km",
    open: true
  },
  
  // Private Hospitals
  {
    id: uuidv4(),
    name: "Ramkrishna Care Hospital, Raipur",
    address: "NH-6, Vidhan Sabha Road, Raipur, Chhattisgarh",
    phone: "0771-4003000",
    specialty: ["Cardiology", "Neurosurgery", "Orthopedics", "Oncology", "Nephrology"],
    openHours: "24 hours",
    rating: 4.7,
    ratingCount: 315,
    image: "https://nsmot.com/wp-content/uploads/2019/05/Modern-modular-operation-theatre-2-5030x2515.jpg",
    hospitalType: "private",
    distance: "3.5 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Shri Balaji Institute of Medical Science, Raipur",
    address: "Mowa, Raipur, Chhattisgarh",
    phone: "0771-6606666",
    specialty: ["Cardiology", "Orthopedics", "Gastroenterology", "Urology", "Dermatology"],
    openHours: "24 hours",
    rating: 4.4,
    ratingCount: 230,
    image: "https://www.mjpaia.com/wp-content/uploads/2012/06/SVMC-ER-MainOperatingRoom-e1338921334793-940x626.jpg",
    hospitalType: "private",
    distance: "5.3 km",
    open: true
  }
];
