import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Receipt } from './entities/receipt.entity';
import { ReceiptsService } from './receipts.service';
import { ReceiptsController } from './receipts.controller';

@Module({
  controllers: [ReceiptsController],
  providers: [ReceiptsService],
  imports: [TypeOrmModule.forFeature([Receipt])],
  exports: [ReceiptsService],
})
export class ReceiptsModule {}
