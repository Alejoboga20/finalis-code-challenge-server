import { Controller } from '@nestjs/common';
import { ValidatorService } from './validator.service';

@Controller('validator')
export class ValidatorController {
  constructor(private readonly validatorService: ValidatorService) {}
}
