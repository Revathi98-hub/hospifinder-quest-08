// This file contains personalized health tips for various medical conditions
// These are general wellness tips and should not be considered as medical advice

type HealthTip = {
  condition: string;
  tips: string[];
};

// Health tips database for common conditions
const healthTipsDatabase: HealthTip[] = [
  {
    condition: "Common Cold",
    tips: [
      "Stay hydrated by drinking plenty of fluids like water, herbal tea, and clear broths.",
      "Get adequate rest to help your immune system fight the infection.",
      "Use a humidifier or take steamy showers to relieve congestion.",
      "Gargle with salt water to soothe a sore throat.",
      "Consider over-the-counter pain relievers for fever and discomfort, following package instructions."
    ]
  },
  {
    condition: "Flu",
    tips: [
      "Rest and limit your activities until your fever has been gone for at least 24 hours.",
      "Stay hydrated with water, sports drinks, and broths to prevent dehydration.",
      "Take acetaminophen or ibuprofen to reduce fever and ease pain, as directed.",
      "Use a humidifier to add moisture to the air and ease congestion.",
      "Consider getting your annual flu shot to prevent future infections."
    ]
  },
  {
    condition: "COVID-19",
    tips: [
      "Self-isolate to prevent spreading the virus to others.",
      "Monitor your symptoms and oxygen levels with a pulse oximeter if available.",
      "Stay hydrated and get plenty of rest to support your immune system.",
      "Take acetaminophen or ibuprofen for fever and pain as directed.",
      "Seek immediate medical attention if you experience difficulty breathing or persistent chest pain."
    ]
  },
  {
    condition: "Migraine",
    tips: [
      "Identify and avoid personal migraine triggers like certain foods, stress, or lack of sleep.",
      "Rest in a quiet, dark room during an attack to minimize sensory stimulation.",
      "Apply cold or hot compresses to your head and neck for pain relief.",
      "Maintain a regular sleep schedule to help prevent attacks.",
      "Practice stress-reduction techniques like deep breathing, meditation, or yoga."
    ]
  },
  {
    condition: "Hypertension",
    tips: [
      "Reduce sodium (salt) intake in your diet.",
      "Engage in regular physical activity, aiming for at least 150 minutes per week.",
      "Maintain a healthy weight or work on weight reduction if needed.",
      "Limit alcohol consumption and avoid smoking.",
      "Practice stress management techniques such as deep breathing, meditation, or yoga."
    ]
  },
  {
    condition: "Diabetes",
    tips: [
      "Monitor your blood sugar levels regularly as recommended by your healthcare provider.",
      "Follow a balanced diet rich in vegetables, lean proteins, and healthy fats.",
      "Engage in regular physical activity, aiming for at least 150 minutes per week.",
      "Take medications as prescribed and keep regular appointments with your healthcare team.",
      "Check your feet daily for any cuts, sores, or infections."
    ]
  },
  {
    condition: "Asthma",
    tips: [
      "Identify and avoid your personal asthma triggers, such as allergens or irritants.",
      "Take your medications as prescribed, even when you're feeling well.",
      "Use a peak flow meter to monitor your lung function if recommended by your doctor.",
      "Create an asthma action plan with your healthcare provider.",
      "Get vaccinated against flu and pneumonia to prevent complications."
    ]
  },
  {
    condition: "Allergies",
    tips: [
      "Keep windows closed during high pollen seasons and use air purifiers indoors.",
      "Shower and change clothes after spending time outdoors during allergy season.",
      "Wash bedding weekly in hot water to reduce allergen exposure.",
      "Consider using a saline nasal spray to clear allergens from nasal passages.",
      "Take over-the-counter antihistamines as directed when symptoms appear."
    ]
  },
  {
    condition: "Irritable Bowel Syndrome",
    tips: [
      "Identify and avoid foods that trigger your symptoms.",
      "Eat smaller, more frequent meals instead of large meals.",
      "Stay hydrated throughout the day.",
      "Incorporate soluble fiber into your diet gradually.",
      "Practice stress management techniques like deep breathing, meditation, or yoga."
    ]
  },
  {
    condition: "Gastritis",
    tips: [
      "Eat smaller, more frequent meals instead of large meals.",
      "Avoid spicy, acidic, or fried foods that can irritate the stomach lining.",
      "Limit or avoid alcohol consumption and smoking.",
      "Avoid NSAIDs like aspirin and ibuprofen if possible.",
      "Manage stress through relaxation techniques or counseling."
    ]
  },
  {
    condition: "Tuberculosis",
    tips: [
      "Take all medications exactly as prescribed for the full course of treatment.",
      "Keep all follow-up appointments with your healthcare provider.",
      "Maintain good ventilation in your living spaces.",
      "Cover your mouth when coughing or sneezing and dispose of tissues properly.",
      "Eat a nutritious diet to support your immune system during recovery."
    ]
  },
  {
    condition: "Pneumonia",
    tips: [
      "Get plenty of rest to help your body fight the infection.",
      "Stay hydrated by drinking plenty of fluids.",
      "Take medications as prescribed by your healthcare provider.",
      "Use a humidifier to add moisture to the air and ease breathing.",
      "Avoid smoking and second-hand smoke."
    ]
  },
  {
    condition: "Dengue Fever",
    tips: [
      "Rest and stay hydrated with water and electrolyte solutions.",
      "Take acetaminophen for fever and pain (avoid aspirin and NSAIDs).",
      "Use mosquito repellent and wear protective clothing.",
      "Eliminate standing water around your home to reduce mosquito breeding.",
      "Seek immediate medical attention if you develop severe abdominal pain, persistent vomiting, or bleeding."
    ]
  },
  {
    condition: "Malaria",
    tips: [
      "Take all prescribed anti-malarial medications for the full course.",
      "Use bed nets treated with insecticide when sleeping.",
      "Apply mosquito repellent and wear protective clothing, especially at dawn and dusk.",
      "Stay hydrated and get plenty of rest during recovery.",
      "If traveling to malaria-endemic areas, consult with a travel medicine specialist beforehand."
    ]
  }
];

// Function to get health tips for a list of conditions
export const getHealthTipsForConditions = (conditions: string[]): string => {
  if (!conditions.length) {
    return "";
  }

  // Find matching health tips for the conditions
  const matchingTips: HealthTip[] = [];
  
  conditions.forEach(condition => {
    const matchingTip = healthTipsDatabase.find(
      tip => tip.condition.toLowerCase() === condition.toLowerCase()
    );
    
    if (matchingTip) {
      matchingTips.push(matchingTip);
    }
  });
  
  // If no specific tips found
  if (!matchingTips.length) {
    return "I don't have specific tips for your conditions, but here are some general wellness recommendations:\n\n" +
      "• Stay hydrated by drinking plenty of water throughout the day\n" +
      "• Get 7-9 hours of quality sleep each night\n" +
      "• Engage in regular physical activity appropriate for your condition\n" +
      "• Maintain a balanced diet rich in fruits, vegetables, and whole grains\n" +
      "• Practice stress management techniques like meditation or deep breathing";
  }
  
  // Build the health tips response
  let response = "";
  
  matchingTips.forEach(tip => {
    response += `For ${tip.condition}:\n`;
    
    // Select 3 random tips from the available tips to keep it concise
    const randomTips = [...tip.tips].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    randomTips.forEach(t => {
      response += `• ${t}\n`;
    });
    
    response += "\n";
  });
  
  return response;
};
