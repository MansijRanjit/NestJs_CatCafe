import { NestFactory } from '@nestjs/core';
import { CafeModule } from './CatCafe/cafe.module';

async function bootstrap() {
  const app = await NestFactory.create(CafeModule);
  await app.listen(3000);
}
bootstrap();
