
export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface Condition {
  name: string;
  probability: number;
  description: string;
  recommendations: string[];
  urgency: 'low' | 'medium' | 'high' | 'emergency';
}

export interface SymptomAnalysis {
  conditions: Condition[];
  nextSteps: string[];
  needsEmergencyCare: boolean;
}
