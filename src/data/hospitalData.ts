
import { Hospital } from "@/data/hospitals/types";
import { getAllStates, getDistrictsByState } from "@/data/locationData";
import { visakhapatnamHospitals } from "./hospitals/visakhapatnam";
import { otherAndhraHospitals } from "./hospitals/other-andhra";
import { westGodavariHospitals } from "./hospitals/west-godavari";
import { eastGodavariHospitals } from "./hospitals/east-godavari";
import { prakasamHospitals } from "./hospitals/prakasam";
import { nelloreHospitals } from "./hospitals/nellore";
import { krishnaHospitals } from "./hospitals/krishna";
import { kurnoolHospitals } from "./hospitals/kurnool";
import { anantapurHospitals } from "./hospitals/anantapur";
import { gunturHospitals } from "./hospitals/guntur";
import { maharashtraHospitals } from "./hospitals/maharashtra";
import { tamilNaduHospitals } from "./hospitals/tamilnadu";
import { karnatakaHospitals } from "./hospitals/karnataka";
import { delhiHospitals } from "./hospitals/delhi";
import { keralaHospitals } from "./hospitals/kerala";
import { gujaratHospitals } from "./hospitals/gujarat";
import { uttarPradeshHospitals } from "./hospitals/uttarpradesh";
import { westBengalHospitals } from "./hospitals/westbengal";
import { rajasthanHospitals } from "./hospitals/rajasthan";
import { punjabHospitals } from "./hospitals/punjab";
import { assamHospitals } from "./hospitals/assam";
import { biharHospitals } from "./hospitals/bihar";
import { haryanaHospitals } from "./hospitals/haryana";
import { arunachalPradeshHospitals } from "./hospitals/arunachal-pradesh";
import { chhattisgarhHospitals } from "./hospitals/chhattisgarh";
import { goaHospitals } from "./hospitals/goa";
import { himachalPradeshHospitals } from "./hospitals/himachal-pradesh";
import { jharkhandHospitals } from "./hospitals/jharkhand";
import { madhyaPradeshHospitals } from "./hospitals/madhya-pradesh";
import { telanganaHospitals } from "./hospitals/telangana";
import { districtHospitals } from "./hospitals/district-hospitals";
import { 
  getHospitalById as getHospitalByIdUtil,
  searchHospitals as searchHospitalsUtil,
  getHospitalsByLocation as getHospitalsByLocationUtil,
  getAllSpecialties as getAllSpecialtiesUtil
} from "./hospitals/types";

// Export combined hospital data
export const hospitals: Hospital[] = [
  ...visakhapatnamHospitals,
  ...otherAndhraHospitals,
  ...westGodavariHospitals,
  ...eastGodavariHospitals,
  ...prakasamHospitals,
  ...nelloreHospitals,
  ...krishnaHospitals,
  ...kurnoolHospitals,
  ...anantapurHospitals,
  ...gunturHospitals,
  ...maharashtraHospitals,
  ...tamilNaduHospitals,
  ...karnatakaHospitals,
  ...delhiHospitals,
  ...keralaHospitals,
  ...gujaratHospitals,
  ...uttarPradeshHospitals,
  ...westBengalHospitals,
  ...rajasthanHospitals,
  ...punjabHospitals,
  ...assamHospitals,
  ...biharHospitals,
  ...haryanaHospitals,
  ...arunachalPradeshHospitals,
  ...chhattisgarhHospitals,
  ...goaHospitals,
  ...himachalPradeshHospitals,
  ...jharkhandHospitals,
  ...madhyaPradeshHospitals,
  ...telanganaHospitals,
  // Add all district hospitals
  ...Object.values(districtHospitals).flat()
];

// Function to get hospital by ID
export const getHospitalById = (id: string): Hospital | undefined => {
  return getHospitalByIdUtil(hospitals, id);
};

// Function to search hospitals based on criteria
export const searchHospitals = (
  query: string = "", 
  location: string = "",
  state: string = "",
  district: string = ""
): Hospital[] => {
  return searchHospitalsUtil(hospitals, query, location, state, district);
};

// Function to get hospitals by location with distance radius
export const getHospitalsByLocation = (
  latitude: number,
  longitude: number,
  radiusKm: number = 5
): Hospital[] => {
  return getHospitalsByLocationUtil(hospitals, latitude, longitude, radiusKm);
};

// Function to get all unique specialties from the hospitals
export const getAllSpecialties = (): string[] => {
  return getAllSpecialtiesUtil(hospitals);
};

// Function to get hospitals by district and state
export const getHospitalsByDistrict = (state: string, district: string): Hospital[] => {
  const key = `${state}_${district}`.toLowerCase().replace(/\s+/g, '_');
  return districtHospitals[key] || [];
};

