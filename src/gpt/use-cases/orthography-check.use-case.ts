import OpenAI from 'openai';

interface Args {
  prompt: string;
  maxTokens?: number;
}

export const orthographyCheckUseCase = async (openai: OpenAI, args: Args) => {
  const { prompt, maxTokens } = args;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `
                  Texts in english will be provided, they can have spelling or grammar mistakes.
                  Your job is to fix them and return the corrected text along with a 
                  percentage of how much you think the text is accurate.
                  You must answer in JSON format.
                  If there are no mistakes in the text, return a congratulation message.
                  Output Example:
                  {
                    userScore: number,
                    errors: string[], //['error -> solution']
                    message: string, // 'Congratulations, there are no mistakes in the text.'
                  }
                `,
      },
      { role: 'user', content: prompt },
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0,
    max_tokens: maxTokens,
  });

  return {
    completion: completion.choices[0],
  };
};
