import { IsEnum } from 'class-validator';
import { FormStatus } from '../enums/form-status.enum';

export class UpdateFormDto {
  @IsEnum(FormStatus)
  formStatus: FormStatus;
}
