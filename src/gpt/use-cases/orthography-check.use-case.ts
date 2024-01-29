interface Args {
  prompt: string;
}

export const orthographyCheckUseCase = async (args: Args) => {
  const { prompt } = args;
  const apiKey = process.env.OPENAI_API_KEY;

  return {
    message: 'This action returns orthography check',
  };
};
