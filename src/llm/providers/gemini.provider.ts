import { Injectable } from "@nestjs/common";
import { GoogleGenAI } from "@google/genai";
import { LlmProvider } from "../llm/llm.provider";

@Injectable()
export class GeminiProvider implements LlmProvider {
  private readonly client: GoogleGenAI;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not set");
    }

    this.client = new GoogleGenAI({ apiKey });
  }

  async chat(prompt: string): Promise<any> {
    try {
      const response = await this.client.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const text =
        typeof response?.text === "string"
          ? response.text
          : "عذراً، لم يتم استلام رد من النموذج.";

      return {
        provider: "gemini",
        model: "gemini-2.5-flash",
        prompt,
        message: text,
        success: true,
      };
    } catch (error: any) {
      console.error("Gemini Provider Error:", error);
      return {
        provider: "gemini",
        prompt,
        message: error?.message ?? "فشل الاتصال بخدمة الذكاء الاصطناعي",
        success: false,
      };
    }
  }
}
