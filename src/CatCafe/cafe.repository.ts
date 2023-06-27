import { readFile, writeFile } from 'fs/promises';
import { CreateCafeDto } from './dtos/cafedto';

export class CafeRepository {
  async getOrderByID(id: string) {
    const contents = await readFile('cafe.json', 'utf8');
    const order = JSON.parse(contents);
    return order[id];
  }
  async getAllFoodOrder() {
    const contents = await readFile('cafe.json', 'utf8');
    const order = JSON.parse(contents);
    return order;
  }
  async createFoodOrder(cafe: CreateCafeDto) {
    //use cafe.json file and get raw data
    const useCafeJson = await readFile('cafe.json', 'utf8');
    //convert the raw data to JSON
    const cafeJson = JSON.parse(useCafeJson);
    //create a new cafe json to store in the file
    cafeJson[cafe.id] = {
      item_name: cafe.item_name,
      id: cafe.id,
      order_tableNo: cafe.order_tableNo,
      price_rate: cafe.price_rate,
      order_quantity: cafe.order_quantity,
    };
    //store the cafeJson
    await writeFile('cafe.json', JSON.stringify(cafeJson));
  }
}
