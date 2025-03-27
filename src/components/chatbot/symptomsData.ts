
// This is a simplified symptom-to-disease mapping for demonstration purposes only
// In a real application, this would be much more comprehensive and medically reviewed

export const symptomsToDiseasesMap: { [key: string]: string[] } = {
  "fever": ["Common Cold", "Flu", "COVID-19", "Pneumonia", "Meningitis"],
  "cough": ["Common Cold", "Flu", "COVID-19", "Bronchitis", "Pneumonia", "Asthma"],
  "headache": ["Migraine", "Tension Headache", "Sinusitis", "Flu", "Dehydration", "Concussion"],
  "sore throat": ["Common Cold", "Flu", "Strep Throat", "Tonsillitis", "Laryngitis"],
  "runny nose": ["Common Cold", "Flu", "Allergies", "Sinusitis"],
  "fatigue": ["Flu", "Common Cold", "Depression", "Anemia", "Sleep Apnea", "Hypothyroidism"],
  "nausea": ["Food Poisoning", "Migraine", "Motion Sickness", "Morning Sickness", "Gastroenteritis"],
  "vomiting": ["Food Poisoning", "Gastroenteritis", "Migraine", "Morning Sickness", "Labyrinthitis"],
  "diarrhea": ["Food Poisoning", "Gastroenteritis", "Irritable Bowel Syndrome", "Inflammatory Bowel Disease"],
  "abdominal pain": ["Appendicitis", "Gastritis", "Irritable Bowel Syndrome", "Kidney Stones", "Gallstones"],
  "chest pain": ["Heart Attack", "Angina", "Pulmonary Embolism", "Pneumonia", "Acid Reflux"],
  "shortness of breath": ["Asthma", "COVID-19", "Pneumonia", "Heart Failure", "Anxiety", "Pulmonary Embolism"],
  "dizziness": ["Low Blood Pressure", "Anemia", "Inner Ear Problems", "Anxiety", "Dehydration"],
  "rash": ["Allergic Reaction", "Eczema", "Psoriasis", "Chickenpox", "Measles", "Hives"],
  "joint pain": ["Arthritis", "Gout", "Lupus", "Lyme Disease", "Fibromyalgia"],
  "back pain": ["Muscle Strain", "Herniated Disc", "Sciatica", "Kidney Infection", "Arthritis"],
  "sinus pressure": ["Sinusitis", "Allergies", "Common Cold"],
  "ear pain": ["Ear Infection", "Swimmer's Ear", "Ear Wax Buildup", "Temporomandibular Joint Disorder"],
  "swollen lymph nodes": ["Infection", "Mononucleosis", "Immune Disorders", "Cancer"],
  "insomnia": ["Stress", "Anxiety", "Depression", "Sleep Apnea", "Hormonal Imbalances"],
  "loss of appetite": ["Depression", "Anxiety", "Infection", "Digestive Issues", "Cancer"],
  "weight loss": ["Diabetes", "Hyperthyroidism", "Depression", "Cancer", "Inflammatory Bowel Disease"],
  "muscle aches": ["Flu", "COVID-19", "Fibromyalgia", "Chronic Fatigue Syndrome", "Lyme Disease"]
};
