import { IsString } from 'class-validator';

export class CreateCafeDto {
  @IsString()
  item_name: string;

  @IsString()
  id: string;

  @IsString()
  order_tableNo: string;

  @IsString()
  price_rate: string;

  @IsString()
  order_quantity: string;
}
