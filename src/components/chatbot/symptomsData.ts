// This is a symptom-to-disease mapping focused on making symptom combinations more specific
// Multiple symptoms together should point to fewer, more specific diseases

export const symptomsToDiseasesMap: { [key: string]: string[] } = {
  // Respiratory symptoms
  "fever": ["Common Cold", "Flu", "COVID-19", "Pneumonia", "Malaria", "Dengue Fever", "Tuberculosis"],
  "cough": ["Common Cold", "Flu", "COVID-19", "Bronchitis", "Pneumonia", "Tuberculosis"],
  "sore throat": ["Common Cold", "Flu", "Strep Throat", "Tonsillitis"],
  "runny nose": ["Common Cold", "Allergies", "Sinusitis"],
  "shortness of breath": ["Asthma", "COVID-19", "Pneumonia", "Heart Failure", "COPD"],
  "chest pain": ["Heart Attack", "Pneumonia", "GERD", "Anxiety", "Pulmonary Embolism"],
  "phlegm": ["Pneumonia", "Bronchitis", "Common Cold"],
  "dry cough": ["COVID-19", "Asthma", "Allergies"],
  "chronic cough": ["Tuberculosis", "COPD", "Asthma"],
  
  // Gastrointestinal symptoms
  "nausea": ["Food Poisoning", "Migraine", "Morning Sickness", "Gastroenteritis", "Gastritis"],
  "vomiting": ["Food Poisoning", "Gastroenteritis", "Migraine", "Morning Sickness"],
  "diarrhea": ["Food Poisoning", "Gastroenteritis", "Irritable Bowel Syndrome"],
  "abdominal pain": ["Appendicitis", "Gastritis", "Irritable Bowel Syndrome", "Gallstones", "Peptic Ulcer"],
  "constipation": ["Irritable Bowel Syndrome", "Hypothyroidism"],
  "loss of appetite": ["Depression", "Infection", "Cancer"],
  
  // Neurological symptoms
  "headache": ["Migraine", "Tension Headache", "Sinusitis", "Dehydration"],
  "dizziness": ["Low Blood Pressure", "Inner Ear Problems", "Anemia", "Dehydration"],
  "fatigue": ["Flu", "Depression", "Anemia", "Hypothyroidism", "Diabetes"],
  "memory loss": ["Alzheimer's", "Dementia", "Vitamin B12 Deficiency"],
  "seizures": ["Epilepsy", "Brain Tumor", "Stroke"],
  "sensitivity to light": ["Migraine", "Meningitis", "Concussion"],
  "sensitivity to sound": ["Migraine", "Tinnitus", "Ear Infection"],
  
  // Dermatological symptoms
  "rash": ["Allergic Reaction", "Eczema", "Psoriasis", "Chickenpox", "Measles"],
  "itching": ["Fungal Infection", "Scabies", "Eczema", "Allergies"],
  "darkening of skin": ["Addison's Disease", "Melasma"],
  
  // Cardio and systemic symptoms
  "chills": ["Flu", "Pneumonia", "Malaria", "Infection"],
  "joint pain": ["Arthritis", "Gout", "Lupus", "Lyme Disease"],
  "back pain": ["Muscle Strain", "Herniated Disc", "Sciatica", "Kidney Infection"],
  "muscle aches": ["Flu", "COVID-19", "Fibromyalgia", "Lyme Disease"],
  "swollen lymph nodes": ["Infection", "Mononucleosis", "Cancer"],
  "night sweats": ["Tuberculosis", "Menopause", "Lymphoma", "HIV"],
  "unexplained weight loss": ["Diabetes", "Hyperthyroidism", "Cancer", "Tuberculosis"],
  
  // Specific disease symptom clusters
  "fever+joint pain+rash": ["Lupus", "Lyme Disease"],
  "fever+cough+night sweats": ["Tuberculosis"],
  "fever+headache+stiff neck": ["Meningitis"],
  "fever+cough+shortness of breath": ["Pneumonia", "COVID-19"],
  "headache+sensitivity to light+nausea": ["Migraine"],
  "abdominal pain+diarrhea+blood in stool": ["Inflammatory Bowel Disease"],
  "frequent urination+excessive thirst+fatigue": ["Diabetes"],
  "chest pain+shortness of breath+sweating": ["Heart Attack"],
  "fever+severe body aches+headache": ["Dengue Fever", "Malaria"],
  "cough+fever+loss of taste": ["COVID-19"],
  
  // Diabetes-specific
  "frequent urination": ["Diabetes", "Urinary Tract Infection"],
  "excessive thirst": ["Diabetes", "Dehydration"],
  "blurred vision": ["Diabetes", "Hypertension", "Migraine"],
  "slow-healing wounds": ["Diabetes", "Poor Circulation"],
  
  // COVID-19 specific
  "loss of taste": ["COVID-19", "Zinc Deficiency"],
  "loss of smell": ["COVID-19", "Nasal Polyps"],
  
  // Other specific symptoms
  "sinus pressure": ["Sinusitis", "Allergies"],
  "ear pain": ["Ear Infection", "Swimmer's Ear"],
  "insomnia": ["Stress", "Anxiety", "Depression"],
  "painful urination": ["Urinary Tract Infection", "Kidney Stones"],
  "missed periods": ["Polycystic Ovary Syndrome", "Pregnancy", "Thyroid Disorders"]
};

// Disease-symptom mapping with primary and secondary symptoms
export const diseasesWithSymptoms = {
  "Influenza (Flu)": {
    primarySymptoms: ["Fever", "Cough", "Sore throat"],
    secondarySymptoms: ["Muscle aches", "Fatigue", "Chills", "Headache"]
  },
  "COVID-19": {
    primarySymptoms: ["Fever", "Dry cough", "Shortness of breath"],
    secondarySymptoms: ["Loss of taste", "Loss of smell", "Fatigue", "Muscle aches"]
  },
  "Pneumonia": {
    primarySymptoms: ["Fever", "Cough with phlegm", "Shortness of breath"],
    secondarySymptoms: ["Chest pain", "Fatigue", "Chills"]
  },
  "Tuberculosis": {
    primarySymptoms: ["Chronic cough", "Coughing blood", "Night sweats"],
    secondarySymptoms: ["Fever", "Fatigue", "Unexplained weight loss"]
  },
  "Diabetes (Type 2)": {
    primarySymptoms: ["Frequent urination", "Excessive thirst", "Unexplained weight loss"],
    secondarySymptoms: ["Blurred vision", "Fatigue", "Slow-healing wounds"]
  },
  "Migraine": {
    primarySymptoms: ["Severe headache", "Sensitivity to light", "Sensitivity to sound"],
    secondarySymptoms: ["Nausea", "Visual disturbances", "Dizziness"]
  },
  "Common Cold": {
    primarySymptoms: ["Runny nose", "Sore throat", "Mild cough"],
    secondarySymptoms: ["Sneezing", "Congestion", "Low-grade fever"]
  },
  "Dengue Fever": {
    primarySymptoms: ["High fever", "Severe headache", "Severe body aches"],
    secondarySymptoms: ["Rash", "Bleeding gums", "Eye pain"]
  },
  "Malaria": {
    primarySymptoms: ["Fever", "Chills", "Sweating"],
    secondarySymptoms: ["Headache", "Muscle aches", "Fatigue", "Nausea"]
  },
  "Heart Attack": {
    primarySymptoms: ["Chest pain", "Shortness of breath", "Sweating"],
    secondarySymptoms: ["Nausea", "Lightheadedness", "Jaw pain", "Arm pain"]
  },
  "Irritable Bowel Syndrome": {
    primarySymptoms: ["Abdominal pain", "Diarrhea", "Constipation"],
    secondarySymptoms: ["Bloating", "Gas", "Mucus in stool"]
  },
  "Meningitis": {
    primarySymptoms: ["Fever", "Headache", "Stiff neck"],
    secondarySymptoms: ["Sensitivity to light", "Confusion", "Nausea"]
  },
  "Lupus": {
    primarySymptoms: ["Joint pain", "Rash", "Fatigue"],
    secondarySymptoms: ["Fever", "Chest pain", "Hair loss", "Photosensitivity"]
  },
  "Alzheimer's Disease": {
    primarySymptoms: ["Memory loss", "Confusion", "Difficulty with familiar tasks"],
    secondarySymptoms: ["Mood changes", "Problems with abstract thinking", "Poor judgment"]
  },
  "Urinary Tract Infection": {
    primarySymptoms: ["Painful urination", "Frequent urination", "Cloudy urine"],
    secondarySymptoms: ["Pelvic pain", "Lower abdominal pain", "Strong-smelling urine"]
  }
};
