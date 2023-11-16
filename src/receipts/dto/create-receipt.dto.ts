import { IsDate, IsNumber, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReceiptDto {
  @IsDate()
  @Type(() => Date)
  receiptDate: Date;

  @IsNumber()
  @IsPositive()
  taxAmount: number;

  @IsNumber()
  @IsPositive()
  taxPercentage: number;
}
