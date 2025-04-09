
import { Hospital } from "@/data/hospitals/types";
import { v4 as uuidv4 } from "uuid";

export const assamHospitals: Hospital[] = [
  {
    id: uuidv4(),
    name: "Gauhati Medical College and Hospital",
    address: "Bhangagarh, Guwahati, Assam",
    phone: "0361-2529457",
    specialty: ["General Medicine", "Surgery", "Cardiology", "Neurology", "Orthopedics"],
    openHours: "24 hours",
    rating: 4.3,
    ratingCount: 187,
    image: "https://images.onlymyhealth.com/imported/images/2021/June/16_Jun_2021/HomeICU_big.jpg",
    hospitalType: "government",
    distance: "3.2 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Assam Medical College and Hospital",
    address: "Dibrugarh, Assam",
    phone: "0373-2300080",
    specialty: ["General Medicine", "Pediatrics", "Gynecology", "ENT", "Ophthalmology"],
    openHours: "24 hours",
    rating: 4.1,
    ratingCount: 143,
    image: "https://cdnassets.hw.net/3c/59/2e8a2f6740fcbfe830881f80b596/c82bbba2-6249-4cd8-a66a-502941a4eeb6.jpg",
    hospitalType: "government",
    distance: "4.5 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Down Town Hospital",
    address: "G.S. Road, Guwahati, Assam",
    phone: "0361-2331003",
    specialty: ["Cardiology", "Neurosurgery", "Orthopedics", "Gastroenterology", "Urology"],
    openHours: "24 hours",
    rating: 4.5,
    ratingCount: 210,
    image: "https://nsmot.com/wp-content/uploads/2019/05/Modern-modular-operation-theatre-2-5030x2515.jpg",
    hospitalType: "private",
    distance: "2.8 km",
    open: true
  },
  {
    id: uuidv4(),
    name: "Narayana Superspeciality Hospital",
    address: "Amingaon, North Guwahati, Assam",
    phone: "0361-7111000",
    specialty: ["Cardiology", "Cardiac Surgery", "Nephrology", "Oncology", "Transplant Services"],
    openHours: "24 hours",
    rating: 4.7,
    ratingCount: 175,
    image: "https://www.mjpaia.com/wp-content/uploads/2012/06/SVMC-ER-MainOperatingRoom-e1338921334793-940x626.jpg",
    hospitalType: "private",
    distance: "5.2 km",
    open: true
  }
];
