import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FormsModule } from './forms/forms.module';
import { ReceiptsModule } from './receipts/receipts.module';
import { ValidatorModule } from './validator/validator.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    FormsModule,
    ReceiptsModule,
    ValidatorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
