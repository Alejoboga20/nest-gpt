import OpenAI from 'openai';

interface Args {
  prompt: string;
  maxTokens?: number;
}

export const prosConsDiscusserStreamUseCase = async (
  openai: OpenAI,
  { prompt, maxTokens }: Args,
) => {
  return await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `
              You will be given a question and your task is to give an answer with pros and cons,
              You must answer in markdown format, and pros and cons must be in a list.`,
      },
      { role: 'user', content: prompt },
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0.3,
    max_tokens: maxTokens,
    stream: true,
  });
};
