
interface MedicalCondition {
  description: string;
  recommendations: string[];
  urgency: 'low' | 'medium' | 'high' | 'emergency';
}

export const medicalConditions: Record<string, MedicalCondition> = {
  "headache": {
    description: "Headaches can be caused by various factors, including stress, dehydration, lack of sleep, or underlying medical conditions. Most headaches are not serious.",
    recommendations: [
      "Rest in a quiet, dark room",
      "Stay hydrated",
      "Take over-the-counter pain relievers as directed",
      "Apply a cold or warm compress to your head"
    ],
    urgency: "low"
  },
  "migraine": {
    description: "Migraines are severe, often debilitating headaches sometimes accompanied by nausea, vomiting, and sensitivity to light and sound.",
    recommendations: [
      "Rest in a quiet, dark room",
      "Apply cold compresses to your head",
      "Consider prescribed migraine medications",
      "Track your triggers and try to avoid them"
    ],
    urgency: "medium"
  },
  "fever": {
    description: "Fever is your body's natural response to infection or illness. A temperature above 100.4°F (38°C) is considered a fever.",
    recommendations: [
      "Stay hydrated",
      "Rest",
      "Take fever-reducing medication if needed",
      "Monitor your temperature"
    ],
    urgency: "medium"
  },
  "cough": {
    description: "Coughing is a reflex that helps clear your airways of irritants. Causes include viruses, allergies, and environmental factors.",
    recommendations: [
      "Stay hydrated",
      "Use honey and lemon in warm water for sore throat (if over 1 year old)",
      "Use a humidifier",
      "Avoid irritants like smoke"
    ],
    urgency: "low"
  },
  "sore throat": {
    description: "Sore throats are often caused by viral infections like colds or flu, but can also be due to allergies, dry air, or bacterial infections like strep throat.",
    recommendations: [
      "Gargle with salt water",
      "Stay hydrated",
      "Suck on throat lozenges",
      "Use a humidifier"
    ],
    urgency: "low"
  },
  "chest pain": {
    description: "Chest pain can be caused by many conditions, from minor issues to serious ones like heart attacks. Never ignore chest pain, especially if it's severe or accompanied by other symptoms.",
    recommendations: [
      "Seek immediate medical attention",
      "Call emergency services (911)",
      "Chew aspirin if advised by a medical professional",
      "Try to remain calm and seated"
    ],
    urgency: "emergency"
  },
  "shortness of breath": {
    description: "Difficulty breathing can result from anxiety, asthma, COPD, heart conditions, allergies, or respiratory infections.",
    recommendations: [
      "Sit upright to help ease breathing",
      "Use prescribed inhalers if you have asthma",
      "Practice slow, deep breathing",
      "Seek medical help if severe or sudden"
    ],
    urgency: "high"
  },
  "fatigue": {
    description: "Feeling tired or lacking energy can result from poor sleep, stress, depression, certain medications, or medical conditions.",
    recommendations: [
      "Improve sleep habits",
      "Stay physically active",
      "Eat a balanced diet",
      "Consider stress management techniques"
    ],
    urgency: "low"
  },
  "nausea": {
    description: "Nausea is the sensation of discomfort in the stomach with an urge to vomit. It can be caused by many things including motion sickness, infections, or food poisoning.",
    recommendations: [
      "Eat small, bland meals",
      "Stay hydrated with clear fluids",
      "Avoid strong odors",
      "Try ginger tea or candies"
    ],
    urgency: "low"
  },
  "vomiting": {
    description: "Vomiting can be caused by viruses, food poisoning, motion sickness, or more serious conditions. Persistent vomiting can lead to dehydration.",
    recommendations: [
      "Sip clear fluids slowly",
      "Avoid solid foods until vomiting subsides",
      "Gradually reintroduce bland foods",
      "Seek medical attention if vomiting persists for more than 24 hours"
    ],
    urgency: "medium"
  },
  "diarrhea": {
    description: "Loose, watery stools often caused by viruses, bacteria, food intolerances, or medications. Can lead to dehydration if severe.",
    recommendations: [
      "Stay hydrated with water, clear broths, and electrolyte solutions",
      "Avoid dairy, caffeine, and high-fiber foods",
      "Try the BRAT diet (bananas, rice, applesauce, toast)",
      "Wash hands frequently to prevent spread"
    ],
    urgency: "medium"
  },
  "dizziness": {
    description: "Feeling lightheaded or unsteady can be caused by inner ear problems, low blood pressure, dehydration, or more serious conditions.",
    recommendations: [
      "Sit or lie down immediately if feeling dizzy",
      "Avoid sudden movements",
      "Stay hydrated",
      "Avoid caffeine and alcohol"
    ],
    urgency: "medium"
  },
  "rash": {
    description: "Skin irritation that may be itchy, red, or swollen. Causes include allergies, infections, heat, or underlying conditions.",
    recommendations: [
      "Avoid scratching",
      "Use mild soaps and moisturizers",
      "Try cold compresses for itching",
      "Consider over-the-counter antihistamines or hydrocortisone cream"
    ],
    urgency: "low"
  },
  "back pain": {
    description: "Common condition often caused by muscle strain, poor posture, arthritis, or disk problems. Most cases resolve with self-care.",
    recommendations: [
      "Apply ice for the first 48-72 hours, then switch to heat",
      "Take over-the-counter pain relievers as directed",
      "Maintain good posture",
      "Engage in gentle stretching and strengthening exercises"
    ],
    urgency: "low"
  },
  "abdominal pain": {
    description: "Pain in the area between the chest and groin. Causes range from gas and indigestion to appendicitis or kidney stones.",
    recommendations: [
      "Rest and avoid solid foods if nauseated",
      "Try a heating pad for cramps",
      "Avoid fatty or spicy foods",
      "Seek immediate care for severe, persistent pain or if accompanied by fever"
    ],
    urgency: "medium"
  },
  "depression": {
    description: "A mood disorder causing persistent feelings of sadness, loss of interest, and impaired daily functioning.",
    recommendations: [
      "Reach out to a mental health professional",
      "Stay connected with supportive friends and family",
      "Engage in regular physical activity",
      "Maintain a consistent sleep schedule"
    ],
    urgency: "medium"
  },
  "anxiety": {
    description: "Feelings of worry, nervousness, or unease about something with an uncertain outcome. Can include physical symptoms like rapid heartbeat and shortness of breath.",
    recommendations: [
      "Practice deep breathing exercises",
      "Engage in regular physical activity",
      "Consider mindfulness or meditation",
      "Speak with a mental health professional"
    ],
    urgency: "medium"
  }
};
