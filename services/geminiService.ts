
import { GoogleGenAI } from "@google/genai";
import { ServiceProvider } from "../types";

// Always use the process.env.API_KEY string directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAssistance = async (query: string, providers: ServiceProvider[]) => {
  const model = 'gemini-3-flash-preview';
  
  const providerContext = providers.map(p => 
    `${p.name} (${p.category}): ${p.description} - রেটিং: ${p.rating}`
  ).join('\n');

  const systemInstruction = `
    আপনি "সহায়" অ্যাপের একজন এআই অ্যাসিস্ট্যান্ট। 
    ব্যবহারকারীর প্রশ্নের উত্তর বাংলায় দিন।
    নিচে দেওয়া সার্ভিস প্রোভাইডারদের তথ্যের ভিত্তিতে সেরা পরামর্শ দিন।
    যদি কোনো প্রোভাইডার সরাসরি না মিলে, তবে কাছাকাছি কোনো ক্যাটাগরি সাজেস্ট করুন।
    কথাবার্তা খুব সংক্ষিপ্ত এবং পেশাদার রাখুন।
    
    উপলব্ধ সার্ভিস প্রোভাইডার:
    ${providerContext}
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: query,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    // Access the .text property directly as it returns the string output
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "দুঃখিত, আমি বর্তমানে সংযোগ করতে পারছি না। দয়া করে ম্যানুয়ালি ক্যাটাগরি চেক করুন।";
  }
};