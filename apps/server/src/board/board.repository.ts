import { Inject, Injectable, Scope } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma.service';
import { Board, Prisma } from '@prisma/client';
import { REQUEST } from '@nestjs/core';
import { IRequest } from '../types/http.type';

@Injectable({ scope: Scope.REQUEST })
export class BoardRepository {
  constructor(
    private prisma: PrismaService,
    @Inject(REQUEST) private request: IRequest,
  ) {}

  list(
    boardWhereUniqueInput?: Prisma.BoardFindManyArgs,
  ): Promise<Board[] | null> {
    const currentUser = this.request.user;

    const whereUniqueInput = {
      ...boardWhereUniqueInput,
      where: { ...boardWhereUniqueInput?.where, userId: currentUser.id },
    } as Prisma.BoardFindManyArgs;

    return this.prisma.board.findMany(whereUniqueInput);
  }

  create(board: Partial<Board>): Promise<Board> {
    const currentUser = this.request.user;

    return this.prisma.board.create({
      data: {
        name: board.name,
        User: {
          connect: {
            id: currentUser.id,
          },
        },
      },
    });
  }
}
