
import { Hospital } from "@/components/HospitalCard";

// Re-export the Hospital type from HospitalCard
export type { Hospital };

// Helper functions for hospital data
export const getHospitalById = (hospitals: Hospital[], id: string): Hospital | undefined => {
  return hospitals.find(hospital => hospital.id === id);
};

export const searchHospitals = (
  hospitals: Hospital[],
  query: string = "", 
  location: string = "",
  state: string = "",
  district: string = ""
): Hospital[] => {
  let filteredHospitals = [...hospitals];
  
  // Filter by search query (hospital name or specialty)
  if (query) {
    const searchTerm = query.toLowerCase();
    filteredHospitals = filteredHospitals.filter(hospital => 
      hospital.name.toLowerCase().includes(searchTerm) || 
      hospital.specialty?.some(spec => spec.toLowerCase().includes(searchTerm))
    );
  }
  
  // Filter by location
  if (location) {
    const locationTerm = location.toLowerCase();
    filteredHospitals = filteredHospitals.filter(hospital => 
      hospital.address.toLowerCase().includes(locationTerm)
    );
  }
  
  // Filter by state
  if (state) {
    filteredHospitals = filteredHospitals.filter(hospital => 
      hospital.address.toLowerCase().includes(state.toLowerCase())
    );
  }
  
  // Filter by district
  if (district) {
    filteredHospitals = filteredHospitals.filter(hospital => 
      hospital.address.toLowerCase().includes(district.toLowerCase())
    );
  }
  
  return filteredHospitals;
};

export const getHospitalsByLocation = (
  hospitals: Hospital[],
  latitude: number,
  longitude: number,
  radiusKm: number = 5
): Hospital[] => {
  // In a real app, we would calculate actual distances
  // For this demo, we'll simulate by filtering randomly
  
  const result = hospitals.map(hospital => {
    // Generate a random distance between 0.5 and 10 km
    const randomDistance = (Math.random() * 9.5 + 0.5).toFixed(1);
    return {
      ...hospital,
      distance: `${randomDistance} km`
    };
  }).filter(hospital => {
    // Convert the distance string to a number for comparison
    const distanceValue = parseFloat(hospital.distance?.split(' ')[0] || '0');
    return distanceValue <= radiusKm;
  });
  
  // Sort by distance
  return result.sort((a, b) => {
    const distA = parseFloat(a.distance?.split(' ')[0] || '0');
    const distB = parseFloat(b.distance?.split(' ')[0] || '0');
    return distA - distB;
  });
};

export const getAllSpecialties = (hospitals: Hospital[]): string[] => {
  const specialtiesSet = new Set<string>();
  
  hospitals.forEach(hospital => {
    hospital.specialty?.forEach(spec => {
      specialtiesSet.add(spec);
    });
  });
  
  return Array.from(specialtiesSet).sort();
};
