import { Module } from '@nestjs/common';
import { ColumnRepository } from './column.repository';
import { ColumnController } from './column.controller';
import { PrismaService } from '../shared/services/prisma.service';

@Module({
  controllers: [ColumnController],
  providers: [PrismaService, ColumnRepository],
})
export class ColumnModule {}
