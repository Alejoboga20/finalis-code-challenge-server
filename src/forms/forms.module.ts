import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Form } from './entities/form.entity';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';

import { ReceiptsModule } from '../receipts/receipts.module';

@Module({
  controllers: [FormsController],
  providers: [FormsService],
  imports: [TypeOrmModule.forFeature([Form]), ReceiptsModule],
})
export class FormsModule {}
