import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Receipt } from 'src/receipts/entities/receipt.entity';

@Entity()
export class Form {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'company_name', type: 'text' })
  companyName: string;

  @Column({ name: 'fiscal_code', type: 'text' })
  fiscalCode: string;

  @Column({ name: 'client_number', type: 'numeric' })
  clientNumber: number;

  @OneToMany(() => Receipt, (receipt) => receipt.form)
  receipts: Receipt[];
}
