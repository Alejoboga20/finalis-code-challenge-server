import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateReceiptDto } from 'src/receipts/dto/create-receipt.dto';

export class CreateFormDto {
  @IsString()
  @MinLength(1)
  companyName: string;

  @IsString()
  @MinLength(3)
  fiscalCode: string;

  @IsNumber()
  @IsPositive()
  clientNumber: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateReceiptDto)
  receipts: CreateReceiptDto[];
}
