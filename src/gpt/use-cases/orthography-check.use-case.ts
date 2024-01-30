import OpenAI from 'openai';

interface Args {
  prompt: string;
}

export const orthographyCheckUseCase = async (openai: OpenAI, args: Args) => {
  const { prompt } = args;

  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: prompt },
    ],
    model: 'gpt-3.5-turbo',
  });

  return {
    completion: completion.choices[0],
  };
};
