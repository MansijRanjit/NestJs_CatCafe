import { CafeRepository } from './cafe.repository';
import { CreateCafeDto } from './dtos/cafedto';

export class CafeService {
  cafeRepo: CafeRepository;

  constructor() {
    this.cafeRepo = new CafeRepository();
  }

  getOrderById(id: string) {
    return this.cafeRepo.getOrderByID(id);
  }

  getAllFoodOrder() {
    return this.cafeRepo.getAllFoodOrder();
  }

  createFoodOrder(cafe: CreateCafeDto) {
    return this.cafeRepo.createFoodOrder(cafe);
  }
}
