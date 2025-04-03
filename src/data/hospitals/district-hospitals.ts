
import { Hospital } from "./types";
import { indianLocations } from "../locationData";
import { v4 as uuidv4 } from "uuid";

// Function to generate a random hospital for districts that don't have one
export const generateDistrictHospitals = (): Record<string, Hospital[]> => {
  // Initialize the result object
  const result: Record<string, Hospital[]> = {};
  
  // Government hospital image options
  const govHospitalImages = [
    "https://images.unsplash.com/photo-1587351021759-3772687fe598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
  ];
  
  // Private hospital image options
  const privateHospitalImages = [
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80"
  ];
  
  // Government specialties
  const govSpecialties = [
    ["General Medicine", "Emergency", "Surgery", "Orthopedics"],
    ["General Medicine", "Pediatrics", "Gynecology"],
    ["Primary Care", "Family Medicine", "Maternal Health"]
  ];
  
  // Private specialties
  const privateSpecialties = [
    ["Multi-Specialty", "Cardiology", "Neurology", "Orthopedics"],
    ["General Medicine", "Gynecology", "Pediatrics"],
    ["Cardiology", "Orthopedics", "Gastroenterology"]
  ];
  
  // Loop through each state in indianLocations
  indianLocations.forEach(location => {
    const state = location.state;
    const districts = location.districts;
    
    // For each district, ensure it has hospitals
    districts.forEach(district => {
      const districtKey = `${state}_${district}`.toLowerCase().replace(/\s+/g, '_');
      
      // Create one government hospital
      const govHospital: Hospital = {
        id: uuidv4(),
        name: `Government District Hospital, ${district}`,
        address: `${district}, ${state}`,
        distance: `${(Math.random() * 4 + 1).toFixed(1)} km`,
        image: govHospitalImages[Math.floor(Math.random() * govHospitalImages.length)],
        rating: +(Math.random() * 1 + 3.5).toFixed(1),
        ratingCount: Math.floor(Math.random() * 300 + 100),
        open: true,
        openHours: "24 hours",
        phone: `+91 ${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        specialty: govSpecialties[Math.floor(Math.random() * govSpecialties.length)],
        hospitalType: "government"
      };
      
      // Create one private hospital
      const privateHospital: Hospital = {
        id: uuidv4(),
        name: `${district} Super Specialty Hospital`,
        address: `${district}, ${state}`,
        distance: `${(Math.random() * 4 + 1).toFixed(1)} km`,
        image: privateHospitalImages[Math.floor(Math.random() * privateHospitalImages.length)],
        rating: +(Math.random() * 1 + 3.8).toFixed(1),
        ratingCount: Math.floor(Math.random() * 300 + 150),
        open: true,
        openHours: "24 hours",
        phone: `+91 ${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        specialty: privateSpecialties[Math.floor(Math.random() * privateSpecialties.length)],
        hospitalType: "private"
      };
      
      // Add these hospitals to the result
      result[districtKey] = [govHospital, privateHospital];
    });
  });
  
  return result;
};

// Generate the district hospitals
export const districtHospitals = generateDistrictHospitals();

