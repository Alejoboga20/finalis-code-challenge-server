import { Injectable } from '@nestjs/common';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Receipt } from './entities/receipt.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReceiptsService {
  constructor(
    @InjectRepository(Receipt)
    private readonly receiptRepository: Repository<Receipt>,
  ) {}

  async create(createReceiptDto: CreateReceiptDto): Promise<Receipt> {
    const receipt = this.receiptRepository.create(createReceiptDto);
    await this.receiptRepository.save(receipt);

    return receipt;
  }
}
