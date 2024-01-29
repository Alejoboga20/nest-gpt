import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases/orthography-check.use-case';

@Injectable()
export class GptService {
  async orthographyCheck() {
    const result = await orthographyCheckUseCase();

    return result;
  }
}
