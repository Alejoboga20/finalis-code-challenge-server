import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Form } from 'src/forms/entities/form.entity';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'receipt_date', type: 'date' })
  receiptDate: Date;

  @Column({ name: 'tax_amount', type: 'numeric' })
  taxAmount: number;

  @Column({ name: 'tax_percentage', type: 'numeric' })
  taxPercentage: number;

  @ManyToOne(() => Form, (form) => form.receipts)
  form: Form;
}
