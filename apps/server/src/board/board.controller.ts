import { Controller, Get } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { Board } from '@prisma/client';

@Controller('api/board')
export class BoardController {
  constructor(private readonly boardRepository: BoardRepository) {}

  @Get('list')
  async list(): Promise<Board[]> {
    return await this.boardRepository.getBoard()
  }
}
