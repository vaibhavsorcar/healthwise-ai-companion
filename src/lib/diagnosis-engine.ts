
import { Message, SymptomAnalysis } from '@/types/chat';
import { medicalConditions } from './medical-data';

/**
 * Simple keyword-based diagnosis engine.
 * In a real app, this would be a more sophisticated ML model or API call.
 */
export async function diagnosisEngine(userMessage: string, previousMessages: Message[]): Promise<string> {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const userMessageLower = userMessage.toLowerCase();
  const symptomsDetected: string[] = [];
  const emergencyKeywords = ['can\'t breathe', 'chest pain', 'heart attack', 'stroke', 'unconscious', 'severe bleeding'];
  
  // Very simple keyword matching - in a real app this would be NLP-based
  Object.keys(medicalConditions).forEach(symptom => {
    if (userMessageLower.includes(symptom.toLowerCase())) {
      symptomsDetected.push(symptom);
    }
  });

  // Check for emergency conditions
  const isEmergency = emergencyKeywords.some(keyword => 
    userMessageLower.includes(keyword.toLowerCase())
  );
  
  if (isEmergency) {
    return "⚠️ EMERGENCY: Based on what you've described, you may require IMMEDIATE medical attention. Please call emergency services (911) right away or go to the nearest emergency room.\n\nDo not wait or delay seeking professional medical help.";
  }

  // If no symptoms detected
  if (symptomsDetected.length === 0) {
    // Check if this is a greeting or general question
    if (isGreeting(userMessageLower)) {
      return "Hello! I'm Healthwise, your AI health assistant. I can help you assess symptoms and provide health guidance. Please describe any symptoms you're experiencing, and I'll do my best to assist you.";
    }
    
    // Ask for more details about symptoms
    return "I need a bit more information about your symptoms to help you better. Could you please describe what you're experiencing in more detail? For example:\n\n- When did your symptoms start?\n- How severe are they?\n- Any other symptoms accompanying these?";
  }

  // Generate a response based on the symptoms
  let response = "";
  
  if (symptomsDetected.length === 1) {
    const symptom = symptomsDetected[0];
    const condition = medicalConditions[symptom];
    
    response = `Based on your mention of ${symptom}, here's what I can tell you:\n\n`;
    response += `${condition.description}\n\n`;
    response += "Recommendations:\n";
    condition.recommendations.forEach(rec => {
      response += `- ${rec}\n`;
    });
    
    if (condition.urgency === 'high' || condition.urgency === 'emergency') {
      response += "\n⚠️ IMPORTANT: These symptoms may indicate a serious condition. Please consult with a healthcare professional as soon as possible.";
    } else {
      response += "\nPlease note that this is not a definitive diagnosis. Consider consulting with a healthcare professional for proper evaluation.";
    }
  } else {
    // Multiple symptoms
    response = "Based on the symptoms you've described (";
    response += symptomsDetected.join(", ");
    response += "), here are some possibilities:\n\n";
    
    let highestUrgency = 'low';
    
    symptomsDetected.forEach((symptom, index) => {
      const condition = medicalConditions[symptom];
      response += `${index + 1}. ${symptom} - ${condition.description.split('.')[0]}.\n`;
      
      // Track highest urgency
      if (condition.urgency === 'emergency') {
        highestUrgency = 'emergency';
      } else if (condition.urgency === 'high' && highestUrgency !== 'emergency') {
        highestUrgency = 'high';
      } else if (condition.urgency === 'medium' && highestUrgency !== 'emergency' && highestUrgency !== 'high') {
        highestUrgency = 'medium';
      }
    });
    
    response += "\nGeneral recommendations:\n";
    response += "- Monitor your symptoms and track any changes\n";
    response += "- Stay hydrated and get adequate rest\n";
    
    if (highestUrgency === 'emergency') {
      response += "\n⚠️ URGENT: Based on your symptoms, please seek immediate medical attention.";
    } else if (highestUrgency === 'high') {
      response += "\n⚠️ IMPORTANT: Consider consulting a healthcare professional soon about these symptoms.";
    } else {
      response += "\nConsider speaking with a healthcare provider if symptoms persist or worsen.";
    }
    
    response += "\n\nWould you like me to provide more specific information about any of these symptoms?";
  }
  
  return response;
}

function isGreeting(message: string): boolean {
  const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'];
  return greetings.some(greeting => message.includes(greeting));
}
