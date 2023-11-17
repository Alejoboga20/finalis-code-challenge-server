import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateFormDto, UpdateFormDto } from './dto';
import { Form } from './entities/form.entity';
import { ReceiptsService } from '../receipts/receipts.service';
import { ValidatorService } from '../validator/validator.service';

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
    private readonly receiptsService: ReceiptsService,
    private readonly validatorService: ValidatorService,
  ) {}

  async create(createFormDto: CreateFormDto): Promise<Form> {
    const { receipts, fiscalCode, ...rest } = createFormDto;

    const isValidFiscalCode = await this.validatorService.validateFiscalId(
      fiscalCode,
    );

    const form = this.formRepository.create({
      ...rest,
      fiscalCode,
      validFiscalCode: isValidFiscalCode,
      receipts: await Promise.all(
        receipts.map(
          async (receipt) => await this.receiptsService.create(receipt),
        ),
      ),
    });

    await this.formRepository.save(form);

    return form;
  }

  async update(id: string, updateFormDto: UpdateFormDto): Promise<Form> {
    const form = await this.findOne(id);

    const updatedForm = await this.formRepository.preload({
      ...form,
      ...updateFormDto,
    });
    await this.formRepository.save(updatedForm);

    return updatedForm;
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
