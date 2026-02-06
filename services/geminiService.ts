
import { GoogleGenAI, Type } from "@google/genai";
import { UNIVERSITIES } from "../constants.ts";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAdmissionsAdvice = async (userMessage: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  const model = ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
      ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
      { role: 'user', parts: [{ text: userMessage }] }
    ],
    config: {
      systemInstruction: `You are the EduPath Chatbot, a highly efficient, data-driven Admissions Intelligence Assistant.

      STRICT FORMATTING RULES:
      - NEVER use Markdown formatting. Specifically, do not use asterisks (*) or underscores (_) for bolding or italics.
      - NEVER use emojis in your response. Keep the text strictly alphanumeric.
      - Your tone is professional, clear, and efficient.
      - Use plain text labels like "SYSTEM NOTE:" or "DATA CHECK:" instead of symbols.

      KNOWLEDGE BASE:
      You have real-time access to these universities: ${UNIVERSITIES.map(u => u.name).join(', ')}.

      RESPONSE STRUCTURE:
      - Use simple line breaks to separate ideas.
      - Provide exact GPA, test scores, and document requirements.
      - Always provide a clear "Next Step" or "Action Item" at the end.
      - Keep responses concise and scannable without relying on visual decorations.`,
    }
  });

  const response = await model;
  return response.text;
};

export const getProgramRecommendations = async (interests: string[], gpa: number) => {
  const model = ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze profile: Interests: ${interests.join(', ')}, GPA: ${gpa}. 
    Rank top 3 matching institutions from data: ${JSON.stringify(UNIVERSITIES)}. 
    Provide statistical justification for each match.`,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            universityName: { type: Type.STRING },
            reason: { type: Type.STRING },
            matchScore: { type: Type.NUMBER, description: 'Percentage from 0 to 100' }
          },
          required: ['universityName', 'reason', 'matchScore']
        }
      }
    }
  });

  const response = await model;
  return JSON.parse(response.text || '[]');
};
