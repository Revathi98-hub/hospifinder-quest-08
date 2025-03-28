
import { Hospital } from "@/data/hospitals/types";
import { v4 as uuidv4 } from "uuid";

export const biharHospitals: Hospital[] = [
  {
    id: uuidv4(),
    name: "Patna Medical College and Hospital",
    address: "Ashok Rajpath, Patna, Bihar",
    phone: "0612-2300343",
    specialty: ["General Medicine", "Surgery", "Orthopedics", "Neurology", "Pediatrics"],
    openHours: "24 hours",
    rating: 4.0,
    ratingCount: 230,
    image: "https://thumbs.dreamstime.com/z/hospital-reception-waiting-room-chairs-building-centre-92207521.jpg",
    type: "Government",
    verified: true,
    mapLocation: {
      latitude: 25.6207,
      longitude: 85.1701
    },
    ambulanceAvailable: true,
    description: "Patna Medical College and Hospital is a premier government medical institution in Bihar, serving as a major healthcare facility for the region.",
    emergencyServices: true,
    distanceFromCenter: "2.5 km"
  },
  {
    id: uuidv4(),
    name: "Nalanda Medical College and Hospital",
    address: "Kankarbagh, Patna, Bihar",
    phone: "0612-2354328",
    specialty: ["General Medicine", "Gynecology", "Pediatrics", "Dermatology", "Psychiatry"],
    openHours: "24 hours",
    rating: 3.9,
    ratingCount: 180,
    image: "https://thumbs.dreamstime.com/z/modern-style-hospital-building-straight-lines-concrete-facing-30588884.jpg",
    type: "Government",
    verified: true,
    mapLocation: {
      latitude: 25.5935,
      longitude: 85.1523
    },
    ambulanceAvailable: true,
    description: "Nalanda Medical College and Hospital is a significant public healthcare facility in Patna, providing essential medical services to the community.",
    emergencyServices: true,
    distanceFromCenter: "3.7 km"
  },
  {
    id: uuidv4(),
    name: "Dr. Ruban Memorial Hospital",
    address: "Patliputra Colony, Patna, Bihar",
    phone: "0612-2270505",
    specialty: ["Cardiology", "Neurosurgery", "Orthopedics", "Urology", "Gastroenterology"],
    openHours: "24 hours",
    rating: 4.5,
    ratingCount: 195,
    image: "https://www.hksh-hospital.com/sites/default/files/website-media/images/accommodation/paediatric-ward/img02.JPG",
    type: "Private",
    verified: true,
    mapLocation: {
      latitude: 25.6327,
      longitude: 85.0945
    },
    ambulanceAvailable: true,
    description: "Dr. Ruban Memorial Hospital is a well-equipped private hospital in Patna, offering specialized healthcare services with modern medical facilities.",
    emergencyServices: true,
    distanceFromCenter: "4.2 km"
  },
  {
    id: uuidv4(),
    name: "Heart Hospital Pvt. Ltd.",
    address: "Boring Road, Patna, Bihar",
    phone: "0612-2540202",
    specialty: ["Cardiology", "Cardiac Surgery", "Interventional Cardiology", "Vascular Surgery"],
    openHours: "24 hours",
    rating: 4.6,
    ratingCount: 167,
    image: "https://admissionxpert.in/wp-content/uploads/2020/11/Operation-Theater-Technology-img-min.jpg",
    type: "Private",
    verified: true,
    mapLocation: {
      latitude: 25.6148,
      longitude: 85.1210
    },
    ambulanceAvailable: true,
    description: "Heart Hospital is a specialized cardiac care center in Patna, providing comprehensive diagnosis, treatment, and management of heart conditions.",
    emergencyServices: true,
    distanceFromCenter: "3.1 km"
  }
];
