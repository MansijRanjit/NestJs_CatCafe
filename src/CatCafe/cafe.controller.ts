import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CafeService } from './cafe.service';
import { CreateCafeDto } from './dtos/cafedto';

@Controller('cafe')
export class CafeController {
  cafeService: CafeService;

  constructor() {
    this.cafeService = new CafeService();
  }

  @Get()
  listOrder() {
    return this.cafeService.getAllFoodOrder();
  }

  @Post()
  createOrder(@Body() cafe: CreateCafeDto) {
    return this.cafeService.createFoodOrder(cafe);
  }

  @Get('/:id')
  getOrderById(@Param('id') id: string) {
    return this.cafeService.getOrderById(id);
  }
}
