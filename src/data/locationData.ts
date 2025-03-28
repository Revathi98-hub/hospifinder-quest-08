
// Indian states and their districts
export interface LocationData {
  state: string;
  districts: string[];
}

export const indianLocations: LocationData[] = [
  {
    state: "Andhra Pradesh",
    districts: ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Visakhapatnam", "West Godavari"]
  },
  {
    state: "Arunachal Pradesh",
    districts: ["Anjaw", "Changlang", "East Kameng", "East Siang", "Lohit", "Lower Dibang Valley", "Papum Pare", "Tawang", "Upper Siang", "West Kameng", "Itanagar", "Naharlagun"]
  },
  {
    state: "Assam",
    districts: ["Barpeta", "Cachar", "Dibrugarh", "Goalpara", "Jorhat", "Kamrup", "Karimganj", "Nagaon", "Tinsukia", "Sonitpur", "Guwahati", "North Guwahati", "Amingaon", "Bhangagarh"]
  },
  {
    state: "Bihar",
    districts: ["Araria", "Bhagalpur", "Gaya", "Katihar", "Madhubani", "Muzaffarpur", "Nalanda", "Patna", "Purnia", "Vaishali", "Kankarbagh", "Patliputra Colony", "Boring Road"]
  },
  {
    state: "Chhattisgarh",
    districts: ["Balod", "Bastar", "Bilaspur", "Dhamtari", "Durg", "Janjgir-Champa", "Korba", "Raigarh", "Raipur", "Rajnandgaon"]
  },
  {
    state: "Delhi",
    districts: ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"]
  },
  {
    state: "Goa",
    districts: ["North Goa", "South Goa"]
  },
  {
    state: "Gujarat",
    districts: ["Ahmedabad", "Banaskantha", "Bharuch", "Bhavnagar", "Gandhinagar", "Jamnagar", "Kutch", "Rajkot", "Surat", "Vadodara"]
  },
  {
    state: "Haryana",
    districts: ["Ambala", "Faridabad", "Gurugram", "Hisar", "Jhajjar", "Karnal", "Kurukshetra", "Panchkula", "Rohtak", "Sonipat", "Civil Lines", "Sector 38", "Sector 51"]
  },
  {
    state: "Himachal Pradesh",
    districts: ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Mandi", "Shimla", "Sirmaur", "Solan"]
  },
  {
    state: "Jharkhand",
    districts: ["Bokaro", "Deoghar", "Dhanbad", "Dumka", "Giridih", "Hazaribagh", "Jamshedpur", "Koderma", "Palamu", "Ranchi"]
  },
  {
    state: "Karnataka",
    districts: ["Bagalkot", "Bengaluru Urban", "Belagavi", "Bidar", "Chikkamagaluru", "Dakshina Kannada", "Dharwad", "Mysuru", "Tumakuru", "Vijayapura"]
  },
  {
    state: "Kerala",
    districts: ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Thiruvananthapuram"]
  },
  {
    state: "Madhya Pradesh",
    districts: ["Bhopal", "Gwalior", "Indore", "Jabalpur", "Morena", "Rewa", "Sagar", "Satna", "Ujjain", "Vidisha"]
  },
  {
    state: "Maharashtra",
    districts: ["Ahmednagar", "Aurangabad", "Jalgaon", "Kolhapur", "Mumbai", "Nagpur", "Nashik", "Pune", "Thane", "Wardha"]
  },
  {
    state: "Punjab",
    districts: ["Amritsar", "Bathinda", "Faridkot", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Ludhiana", "Mohali", "Patiala", "Rupnagar"]
  },
  {
    state: "Rajasthan",
    districts: ["Ajmer", "Alwar", "Bikaner", "Bhilwara", "Jaipur", "Jaisalmer", "Jodhpur", "Kota", "Sikar", "Udaipur"]
  },
  {
    state: "Tamil Nadu",
    districts: ["Chennai", "Coimbatore", "Cuddalore", "Erode", "Kanchipuram", "Madurai", "Salem", "Thanjavur", "Tirunelveli", "Vellore"]
  },
  {
    state: "Telangana",
    districts: ["Adilabad", "Hyderabad", "Jagtial", "Karimnagar", "Khammam", "Mahabubnagar", "Medchal-Malkajgiri", "Nalgonda", "Rangareddy", "Warangal"]
  },
  {
    state: "Uttar Pradesh",
    districts: ["Agra", "Allahabad", "Aligarh", "Bareilly", "Ghaziabad", "Kanpur", "Lucknow", "Meerut", "Moradabad", "Varanasi"]
  },
  {
    state: "West Bengal",
    districts: ["Bankura", "Birbhum", "Cooch Behar", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Kolkata", "Malda", "Purulia"]
  }
];

// Function to get all states
export const getAllStates = (): string[] => {
  return indianLocations.map(location => location.state);
};

// Function to get districts by state
export const getDistrictsByState = (state: string): string[] => {
  const location = indianLocations.find(loc => loc.state === state);
  return location ? location.districts : [];
};
