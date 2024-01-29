import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases/orthography-check.use-case';
import { OrthographyDto } from './dtos';

@Injectable()
export class GptService {
  async orthographyCheck(orthographyDto: OrthographyDto) {
    const result = await orthographyCheckUseCase({
      prompt: orthographyDto.prompt,
    });

    return result;
  }
}
