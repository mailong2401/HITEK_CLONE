export interface PresetQuestion {
  id: string;
  question_text: string;
  category?: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface ChatResponse {
  id: string;
  question_id: string;
  response_text: string;
  keywords?: string[];
  created_at: string;
}

export interface ChatHistory {
  id: string;
  user_message: string;
  bot_response: string;
  session_id: string;
  created_at: string;
}

export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}