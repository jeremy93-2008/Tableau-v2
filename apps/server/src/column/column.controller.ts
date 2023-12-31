import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ColumnRepository } from './column.repository';
import { Column } from '@prisma/client';

@Controller('column')
export class ColumnController {
  constructor(private readonly columnRepository: ColumnRepository) {}

  @Post()
  create(@Body() column: Column) {
    return this.columnRepository.create(column);
  }

  @Get()
  findAll() {
    return this.columnRepository.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.columnRepository.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() column: Column) {
    return this.columnRepository.update(+id, column);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columnRepository.remove(+id);
  }
}
