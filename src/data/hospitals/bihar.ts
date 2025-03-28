
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
    hospitalType: "government",
    distance: "2.5 km",
    open: true
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
    hospitalType: "government",
    distance: "3.7 km",
    open: true
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
    hospitalType: "private",
    distance: "4.2 km",
    open: true
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
    hospitalType: "private",
    distance: "3.1 km",
    open: true
  }
];
