import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';
import { ColumnModule } from './column/column.module';

@Module({
  imports: [UserModule, BoardModule, ColumnModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
