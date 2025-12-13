import { GoogleGenAI, Type } from "@google/genai";
import { AISpecialtyDetails } from '../../types/index';

const apiKey = process.env.API_KEY;

// Safely initialize the client only if the key exists to prevent immediate crashes in environments without keys set yet
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const fetchSpecialtyDetails = async (specialtyName: string): Promise<AISpecialtyDetails> => {
  if (!ai) {
    throw new Error("API Key not configured");
  }

  const model = "gemini-2.5-flash";
  
  const prompt = `Provide a detailed medical summary for the specialty: ${specialtyName}. 
  Include an overview, 3-5 common conditions treated, one recent technological advancement, and common treatments.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overview: { type: Type.STRING, description: "A professional summary of what this specialty focuses on." },
            commonConditions: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "A list of common diseases or conditions treated."
            },
            latestAdvancements: { type: Type.STRING, description: "One significant recent medical advancement in this field." },
            treatments: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Common procedures or treatments performed."
            }
          },
          required: ["overview", "commonConditions", "latestAdvancements", "treatments"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as AISpecialtyDetails;
  } catch (error) {
    console.error("Error fetching specialty details:", error);
    throw error;
  }
};
