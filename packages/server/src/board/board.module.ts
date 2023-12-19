import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardRepository } from './board.repository';

@Module({
  imports: [],
  controllers: [BoardController],
  providers: [BoardRepository],
})
export class BoardModule {}
