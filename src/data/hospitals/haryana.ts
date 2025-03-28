
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
    type: "Government",
    verified: true,
    mapLocation: {
      latitude: 28.8816,
      longitude: 76.6186
    },
    ambulanceAvailable: true,
    description: "Pandit Bhagwat Dayal Sharma Post Graduate Institute of Medical Sciences (PGIMS) is a premier government medical institution in Haryana.",
    emergencyServices: true,
    distanceFromCenter: "3.8 km"
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
    type: "Government",
    verified: true,
    mapLocation: {
      latitude: 28.4595,
      longitude: 77.0266
    },
    ambulanceAvailable: true,
    description: "Civil Hospital in Gurgaon is a government healthcare facility providing essential medical services to the community.",
    emergencyServices: true,
    distanceFromCenter: "2.5 km"
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
    type: "Private",
    verified: true,
    mapLocation: {
      latitude: 28.4389,
      longitude: 77.0406
    },
    ambulanceAvailable: true,
    description: "Medanta – The Medicity is a multi-specialty medical institute with world-class infrastructure and highly skilled medical professionals.",
    emergencyServices: true,
    distanceFromCenter: "5.3 km"
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
    type: "Private",
    verified: true,
    mapLocation: {
      latitude: 28.4264,
      longitude: 77.0724
    },
    ambulanceAvailable: true,
    description: "Artemis Hospital is a leading multi-specialty hospital in Gurugram, known for its advanced medical technologies and excellent patient care.",
    emergencyServices: true,
    distanceFromCenter: "4.7 km"
  }
];
