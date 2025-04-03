
// This is a simplified symptom-to-disease mapping for demonstration purposes only
// In a real application, this would be much more comprehensive and medically reviewed

export const symptomsToDiseasesMap: { [key: string]: string[] } = {
  // Original symptoms
  "fever": ["Common Cold", "Flu", "COVID-19", "Pneumonia", "Meningitis", "Dengue Fever", "Tuberculosis", "Malaria", "Typhoid"],
  "cough": ["Common Cold", "Flu", "COVID-19", "Bronchitis", "Pneumonia", "Asthma", "Tuberculosis"],
  "headache": ["Migraine", "Tension Headache", "Sinusitis", "Flu", "Dehydration", "Concussion", "Hypertension", "Dengue Fever"],
  "sore throat": ["Common Cold", "Flu", "Strep Throat", "Tonsillitis", "Laryngitis"],
  "runny nose": ["Common Cold", "Flu", "Allergies", "Sinusitis"],
  "fatigue": ["Flu", "Common Cold", "Depression", "Anemia", "Sleep Apnea", "Hypothyroidism", "COVID-19", "Tuberculosis", "Pneumonia", "Diabetes"],
  "nausea": ["Food Poisoning", "Migraine", "Motion Sickness", "Morning Sickness", "Gastroenteritis", "Gastritis", "Pregnancy"],
  "vomiting": ["Food Poisoning", "Gastroenteritis", "Migraine", "Morning Sickness", "Labyrinthitis", "Gastritis", "Pregnancy", "Motion Sickness"],
  "diarrhea": ["Food Poisoning", "Gastroenteritis", "Irritable Bowel Syndrome", "Inflammatory Bowel Disease", "Cholera"],
  "abdominal pain": ["Appendicitis", "Gastritis", "Irritable Bowel Syndrome", "Kidney Stones", "Gallstones", "Peptic Ulcer"],
  "chest pain": ["Heart Attack", "Angina", "Pulmonary Embolism", "Pneumonia", "Acid Reflux", "Hypertension", "GERD", "Costochondritis", "Anxiety"],
  "shortness of breath": ["Asthma", "COVID-19", "Pneumonia", "Heart Failure", "Anxiety", "Pulmonary Embolism", "COPD", "Heart Disease"],
  "dizziness": ["Low Blood Pressure", "Anemia", "Inner Ear Problems", "Anxiety", "Dehydration", "Hypertension", "Migraine", "Stroke"],
  "rash": ["Allergic Reaction", "Eczema", "Psoriasis", "Chickenpox", "Measles", "Hives", "Dengue Fever", "Lupus"],
  "joint pain": ["Arthritis", "Gout", "Lupus", "Lyme Disease", "Fibromyalgia"],
  "back pain": ["Muscle Strain", "Herniated Disc", "Sciatica", "Kidney Infection", "Arthritis"],
  "sinus pressure": ["Sinusitis", "Allergies", "Common Cold"],
  "ear pain": ["Ear Infection", "Swimmer's Ear", "Ear Wax Buildup", "Temporomandibular Joint Disorder"],
  "swollen lymph nodes": ["Infection", "Mononucleosis", "Immune Disorders", "Cancer"],
  "insomnia": ["Stress", "Anxiety", "Depression", "Sleep Apnea", "Hormonal Imbalances"],
  "loss of appetite": ["Depression", "Anxiety", "Infection", "Digestive Issues", "Cancer"],
  "weight loss": ["Diabetes", "Hyperthyroidism", "Depression", "Cancer", "Inflammatory Bowel Disease", "Tuberculosis"],
  "muscle aches": ["Flu", "COVID-19", "Fibromyalgia", "Chronic Fatigue Syndrome", "Lyme Disease"],
  
  // Already added symptoms
  "chills": ["Flu", "Pneumonia", "Dengue Fever", "Malaria", "Tuberculosis"],
  "frequent urination": ["Diabetes", "Urinary Tract Infection", "Prostate Issues", "Kidney Infection"],
  "excessive thirst": ["Diabetes", "Dehydration"],
  "blurred vision": ["Diabetes", "Hypertension", "Migraine"],
  "slow-healing wounds": ["Diabetes", "Poor Circulation"],
  "nosebleeds": ["Hypertension", "Dry Air", "Blood Thinners"],
  "sensitivity to light": ["Migraine", "Meningitis", "Concussion"],
  "sensitivity to sound": ["Migraine", "Tinnitus", "Ear Infection"],
  "visual disturbances": ["Migraine", "Stroke", "Retinal Issues"],
  "phlegm": ["Pneumonia", "Bronchitis", "Common Cold"],
  "severe body aches": ["Dengue Fever", "Flu", "Malaria"],
  "bleeding gums": ["Dengue Fever", "Vitamin Deficiency", "Gum Disease"],
  "bleeding nose": ["Dengue Fever", "Hypertension", "Dry Air"],
  "chronic cough": ["Tuberculosis", "COPD", "Lung Cancer", "Asthma"],
  "night sweats": ["Tuberculosis", "Menopause", "Lymphoma", "HIV"],
  "coughing blood": ["Tuberculosis", "Lung Cancer", "Severe Pneumonia"],
  "dry cough": ["COVID-19", "Asthma", "Allergies"],
  "loss of taste": ["COVID-19", "Zinc Deficiency", "Sinus Infection"],
  "loss of smell": ["COVID-19", "Nasal Polyps", "Sinus Infection"],
  
  // New symptoms from the provided list
  "constipation": ["Low Fiber Diet", "Irritable Bowel Syndrome", "Hypothyroidism"],
  "lightheadedness": ["Low Blood Pressure", "Anemia", "Dehydration", "Stroke"],
  "seizures": ["Epilepsy", "Brain Tumor", "Stroke"],
  "memory loss": ["Alzheimer's", "Dementia", "Vitamin B12 Deficiency"],
  "itching": ["Fungal Infection", "Scabies", "Eczema", "Allergies"],
  "darkening of skin": ["Addison's Disease", "Melasma", "Vitamin Deficiency"],
  "painful urination": ["Urinary Tract Infection", "Kidney Stones", "Bladder Infection"],
  "missed periods": ["Polycystic Ovary Syndrome", "Pregnancy", "Thyroid Disorders"]
};

// Diseases with their primary symptoms for reference
export const diseasesWithSymptoms = {
  "Influenza (Flu)": ["Fever", "Chills", "Sore throat", "Cough", "Muscle aches", "Fatigue"],
  "Diabetes (Type 2)": ["Frequent urination", "Excessive thirst", "Unexplained weight loss", "Blurred vision", "Fatigue", "Slow-healing wounds"],
  "Hypertension": ["Headaches", "Dizziness", "Nosebleeds", "Blurred vision", "Chest pain"],
  "Migraine": ["Severe headache", "Nausea", "Sensitivity to light", "Sensitivity to sound", "Visual disturbances"],
  "Pneumonia": ["Cough with phlegm", "Fever", "Shortness of breath", "Chest pain", "Fatigue"],
  "Dengue Fever": ["High fever", "Severe body aches", "Skin rash", "Bleeding gums", "Bleeding nose", "Headache"],
  "Tuberculosis": ["Chronic cough", "Coughing blood", "Unexplained weight loss", "Night sweats", "Fever", "Fatigue"],
  "COVID-19": ["Fever", "Dry cough", "Shortness of breath", "Loss of taste", "Loss of smell", "Fatigue"],
  "Malaria": ["Fever", "Chills", "Headache", "Muscle aches", "Fatigue"],
  "Gastritis": ["Abdominal pain", "Nausea", "Vomiting", "Loss of appetite"],
  "Irritable Bowel Syndrome": ["Abdominal pain", "Diarrhea", "Constipation", "Bloating"],
  "Asthma": ["Shortness of breath", "Wheezing", "Chest tightness", "Cough"],
  "Allergies": ["Sneezing", "Runny nose", "Itching", "Rash", "Watery eyes"],
  "Urinary Tract Infection": ["Frequent urination", "Painful urination", "Cloudy urine", "Pelvic pain"],
  "Alzheimer's Disease": ["Memory loss", "Confusion", "Mood changes", "Difficulty with familiar tasks"]
};

