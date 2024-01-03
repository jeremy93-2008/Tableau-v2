import { Board } from '@prisma/client';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { Permissions } from '../permission/permissions.decorator';
import { Permission } from '../permission/permission';

@Controller('board')
export class BoardController {
  constructor(private readonly boardRepository: BoardRepository) {}

  @Get('list')
  async list(): Promise<Board[]> {
    return await this.boardRepository.list();
  }

  @Post('create')
  @Permissions([Permission.WriteBoard])
  async create(@Body() board: Board): Promise<Board> {
    //return await this.boardRepository.create(board);
    return board as Board;
  }
}
