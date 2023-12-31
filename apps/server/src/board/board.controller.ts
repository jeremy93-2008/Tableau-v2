import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { Board } from '@prisma/client';
import { PermissionGuard } from '../permission/permission.guard';

@Controller('board')
export class BoardController {
  constructor(private readonly boardRepository: BoardRepository) {}

  @Get('list')
  async list(): Promise<Board[]> {
    return await this.boardRepository.list();
  }

  @UseGuards(PermissionGuard)
  @Post('create')
  async create(@Body() board: Partial<Board>): Promise<Board> {
    //return await this.boardRepository.create(board);
    return board as Board;
  }
}
