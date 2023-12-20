import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardRepository } from './board.repository';
import { PrismaService } from '../shared/services/prisma.service';

@Module({
  imports: [],
  controllers: [BoardController],
  providers: [BoardRepository, PrismaService],
})

export class BoardModule {}
