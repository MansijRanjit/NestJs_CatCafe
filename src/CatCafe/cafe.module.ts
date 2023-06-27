import { Module } from '@nestjs/common';
import { CafeController } from './cafe.controller';

@Module({
  controllers: [CafeController],
})
export class CafeModule {}
