import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BoardModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
