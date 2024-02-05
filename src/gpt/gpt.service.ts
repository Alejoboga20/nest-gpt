import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

import {
  orthographyCheckUseCase,
  prosConsDiscusserUseCase,
  prosConsDiscusserStreamUseCase,
} from './use-cases';
import { OrthographyDto } from './dtos';
import { ProsConsDiscusserDto } from './dtos/pros-cons-discusser.dto';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async orthographyCheck(orthographyDto: OrthographyDto) {
    const result = await orthographyCheckUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });

    return result;
  }

  async prosConsDicusser({ prompt }: ProsConsDiscusserDto) {
    const result = await prosConsDiscusserUseCase(this.openai, {
      prompt,
    });

    return result;
  }

  async prosConsDicusserStream({ prompt }: ProsConsDiscusserDto) {
    const result = await prosConsDiscusserStreamUseCase(this.openai, {
      prompt,
    });

    return result;
  }
}
