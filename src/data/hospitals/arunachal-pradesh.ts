
import { Hospital } from "@/data/hospitals/types";
import { v4 as uuidv4 } from "uuid";

export const arunachalPradeshHospitals: Hospital[] = [
  {
    id: uuidv4(),
    name: "Tomo Riba Institute of Health and Medical Sciences",
    address: "Naharlagun, Papum Pare, Arunachal Pradesh",
    phone: "0360-2351801",
    specialty: ["General Medicine", "Surgery", "Pediatrics", "Gynecology", "Orthopedics"],
    openHours: "24 hours",
    rating: 4.0,
    ratingCount: 120,
    image: "https://thumbs.dreamstime.com/z/hospital-reception-waiting-room-chairs-building-centre-92207521.jpg",
    type: "Government",
    verified: true,
    mapLocation: {
      latitude: 27.1041,
      longitude: 93.6957
    },
    ambulanceAvailable: true,
    description: "Tomo Riba Institute of Health and Medical Sciences is a government medical institution providing comprehensive healthcare services in Arunachal Pradesh.",
    emergencyServices: true,
    distanceFromCenter: "4.1 km"
  },
  {
    id: uuidv4(),
    name: "District Hospital, Itanagar",
    address: "Itanagar, Papum Pare, Arunachal Pradesh",
    phone: "0360-2212671",
    specialty: ["General Medicine", "Pediatrics", "Gynecology", "ENT", "Dentistry"],
    openHours: "24 hours",
    rating: 3.7,
    ratingCount: 95,
    image: "https://thumbs.dreamstime.com/z/modern-style-hospital-building-straight-lines-concrete-facing-30588884.jpg",
    type: "Government",
    verified: true,
    mapLocation: {
      latitude: 27.0844,
      longitude: 93.6090
    },
    ambulanceAvailable: true,
    description: "District Hospital in Itanagar is a public healthcare facility serving the residents of the capital city and surrounding areas.",
    emergencyServices: true,
    distanceFromCenter: "2.9 km"
  },
  {
    id: uuidv4(),
    name: "TRIHMS Hospital",
    address: "Naharlagun, Papum Pare, Arunachal Pradesh",
    phone: "0360-2350101",
    specialty: ["Cardiology", "Neurology", "Orthopedics", "Urology", "Gastroenterology"],
    openHours: "24 hours",
    rating: 4.3,
    ratingCount: 110,
    image: "https://www.hksh-hospital.com/sites/default/files/website-media/images/accommodation/paediatric-ward/img02.JPG",
    type: "Private",
    verified: true,
    mapLocation: {
      latitude: 27.1039,
      longitude: 93.6960
    },
    ambulanceAvailable: true,
    description: "TRIHMS Hospital is a well-equipped medical facility offering specialized healthcare services with modern medical infrastructure.",
    emergencyServices: true,
    distanceFromCenter: "4.2 km"
  },
  {
    id: uuidv4(),
    name: "Niba Hospital",
    address: "Papu Nallah, Naharlagun, Arunachal Pradesh",
    phone: "0360-2244089",
    specialty: ["General Medicine", "Surgery", "Obstetrics", "Pediatrics", "Dermatology"],
    openHours: "24 hours",
    rating: 4.1,
    ratingCount: 85,
    image: "https://admissionxpert.in/wp-content/uploads/2020/11/Operation-Theater-Technology-img-min.jpg",
    type: "Private",
    verified: true,
    mapLocation: {
      latitude: 27.1062,
      longitude: 93.7004
    },
    ambulanceAvailable: true,
    description: "Niba Hospital is a private healthcare facility in Naharlagun, offering quality medical services to patients in Arunachal Pradesh.",
    emergencyServices: true,
    distanceFromCenter: "3.8 km"
  }
];
