import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateFormDto } from './dto';
import { Form } from './entities/form.entity';
import { ReceiptsService } from '../receipts/receipts.service';

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
    private readonly receiptsService: ReceiptsService,
  ) {}

  async create(createFormDto: CreateFormDto): Promise<Form> {
    const { receipts, ...rest } = createFormDto;

    const form = this.formRepository.create({
      ...rest,
      receipts: await Promise.all(
        receipts.map(
          async (receipt) => await this.receiptsService.create(receipt),
        ),
      ),
    });

    await this.formRepository.save(form);

    return form;
  }

  async findAll(): Promise<Form[]> {
    const forms = await this.formRepository.find();

    return forms;
  }

  async findOne(id: string): Promise<Form> {
    const form = await this.formRepository.findOne({
      where: { id },
      relations: ['receipts'],
    });

    if (!form) throw new NotFoundException(`Form #${id} not found`);

    return form;
  }
}
