import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma.service';
import { Board, Prisma } from '@prisma/client';

@Injectable()
export class BoardRepository {
    constructor(private prisma: PrismaService) {}

    getBoard(boardWhereUniqueInput?: Prisma.BoardWhereUniqueInput): Promise<Board | null> {
        return this.prisma.board.findUnique({
            where: boardWhereUniqueInput
        });
    }
}