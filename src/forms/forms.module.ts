import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Form } from './entities/form.entity';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';

@Module({
  controllers: [FormsController],
  providers: [FormsService],
  imports: [TypeOrmModule.forFeature([Form])],
})
export class FormsModule {}
