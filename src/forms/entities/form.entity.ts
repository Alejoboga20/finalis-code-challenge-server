import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Receipt } from 'src/receipts/entities/receipt.entity';
import { FormStatus } from '../enums/form-status.enum';

@Entity()
export class Form {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'company_name', type: 'text' })
  companyName: string;

  @Column({ name: 'fiscal_code', type: 'text' })
  fiscalCode: string;

  @Column({ name: 'valid_fiscal_code', type: 'boolean' })
  validFiscalCode: boolean;

  @Column({ name: 'client_number', type: 'numeric' })
  clientNumber: number;

  @Column({
    name: 'form_status',
    type: 'enum',
    enum: FormStatus,
    default: FormStatus.PENDING,
  })
  formStatus: FormStatus;

  @OneToMany(() => Receipt, (receipt) => receipt.form)
  receipts: Receipt[];
}
