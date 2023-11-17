import { Injectable } from '@nestjs/common';
import { fiscalIdRegex } from 'src/common/constants/fiscalIdRegex';

@Injectable()
export class ValidatorService {
  async validateFiscalId(fiscalId: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        const isValid = fiscalIdRegex.test(fiscalId);
        resolve(isValid);
      }, 1000);
    });
  }
}
