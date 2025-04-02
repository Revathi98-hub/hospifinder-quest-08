
// This is a simplified symptom-to-disease mapping for demonstration purposes only
// In a real application, this would be much more comprehensive and medically reviewed

export const symptomsToDiseasesMap: { [key: string]: string[] } = {
  // Original symptoms
  "fever": ["Common Cold", "Flu", "COVID-19", "Pneumonia", "Meningitis", "Dengue Fever", "Tuberculosis"],
  "cough": ["Common Cold", "Flu", "COVID-19", "Bronchitis", "Pneumonia", "Asthma", "Tuberculosis"],
  "headache": ["Migraine", "Tension Headache", "Sinusitis", "Flu", "Dehydration", "Concussion", "Hypertension", "Dengue Fever"],
  "sore throat": ["Common Cold", "Flu", "Strep Throat", "Tonsillitis", "Laryngitis"],
  "runny nose": ["Common Cold", "Flu", "Allergies", "Sinusitis"],
  "fatigue": ["Flu", "Common Cold", "Depression", "Anemia", "Sleep Apnea", "Hypothyroidism", "COVID-19", "Tuberculosis", "Pneumonia", "Diabetes"],
  "nausea": ["Food Poisoning", "Migraine", "Motion Sickness", "Morning Sickness", "Gastroenteritis"],
  "vomiting": ["Food Poisoning", "Gastroenteritis", "Migraine", "Morning Sickness", "Labyrinthitis"],
  "diarrhea": ["Food Poisoning", "Gastroenteritis", "Irritable Bowel Syndrome", "Inflammatory Bowel Disease"],
  "abdominal pain": ["Appendicitis", "Gastritis", "Irritable Bowel Syndrome", "Kidney Stones", "Gallstones"],
  "chest pain": ["Heart Attack", "Angina", "Pulmonary Embolism", "Pneumonia", "Acid Reflux", "Hypertension"],
  "shortness of breath": ["Asthma", "COVID-19", "Pneumonia", "Heart Failure", "Anxiety", "Pulmonary Embolism"],
  "dizziness": ["Low Blood Pressure", "Anemia", "Inner Ear Problems", "Anxiety", "Dehydration", "Hypertension", "Migraine"],
  "rash": ["Allergic Reaction", "Eczema", "Psoriasis", "Chickenpox", "Measles", "Hives", "Dengue Fever"],
  "joint pain": ["Arthritis", "Gout", "Lupus", "Lyme Disease", "Fibromyalgia"],
  "back pain": ["Muscle Strain", "Herniated Disc", "Sciatica", "Kidney Infection", "Arthritis"],
  "sinus pressure": ["Sinusitis", "Allergies", "Common Cold"],
  "ear pain": ["Ear Infection", "Swimmer's Ear", "Ear Wax Buildup", "Temporomandibular Joint Disorder"],
  "swollen lymph nodes": ["Infection", "Mononucleosis", "Immune Disorders", "Cancer"],
  "insomnia": ["Stress", "Anxiety", "Depression", "Sleep Apnea", "Hormonal Imbalances"],
  "loss of appetite": ["Depression", "Anxiety", "Infection", "Digestive Issues", "Cancer"],
  "weight loss": ["Diabetes", "Hyperthyroidism", "Depression", "Cancer", "Inflammatory Bowel Disease", "Tuberculosis"],
  "muscle aches": ["Flu", "COVID-19", "Fibromyalgia", "Chronic Fatigue Syndrome", "Lyme Disease"],
  
  // New symptoms
  "chills": ["Flu", "Pneumonia", "Dengue Fever"],
  "frequent urination": ["Diabetes", "Urinary Tract Infection", "Prostate Issues"],
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
  "loss of smell": ["COVID-19", "Nasal Polyps", "Sinus Infection"]
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
  "COVID-19": ["Fever", "Dry cough", "Shortness of breath", "Loss of taste", "Loss of smell", "Fatigue"]
};
