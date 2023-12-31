import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Column } from '@prisma/client';
import { IRequest } from '../types/http.type';
import { PrismaService } from '../shared/services/prisma.service';

@Injectable({ scope: Scope.REQUEST })
export class ColumnRepository {
  constructor(
    private prismaService: PrismaService,
    @Inject(REQUEST) private request: IRequest,
  ) {}
  create(column: Column) {
    return this.prismaService.column.create({
      data: {
        name: column.name,
        order: column.order,
        color: column.color,
        Board: {
          connect: {
            id: column.boardId,
          },
        },
      },
    });
  }

  findAll() {
    return `This action returns all column`;
  }

  findOne(id: number) {
    return `This action returns a #${id} column`;
  }

  update(id: number, column: Column) {
    return `This action updates a #${id} column`;
  }

  remove(id: number) {
    return `This action removes a #${id} column`;
  }
}
