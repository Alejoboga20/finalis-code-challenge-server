import { Injectable } from '@nestjs/common';

import { CreateFormDto } from './dto';

@Injectable()
export class FormsService {
  create(createFormDto: CreateFormDto) {
    console.log({ createFormDto });
    return 'This action adds a new form';
  }

  findAll() {
    return `This action returns all forms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} form`;
  }
}
