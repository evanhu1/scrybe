import OpenAI from "openai";
import { getPrompt } from "@/lib/prompt";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY_LOCAL,
});

export const createCard = async (description: string) => {
    console.log("Creating card with description:", description);
    const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: getPrompt(description) }],
        model: "gpt-4-turbo",
    });

    return response.choices[0].message.content;
};
