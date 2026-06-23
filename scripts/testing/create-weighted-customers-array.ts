import axios from "axios";
import { Product } from "../../src/types/Product";

async function generateWeightedCustomers() {
  const response = await axios.get("/data/customers.json");

  const { data } = response;
  const weightedCustomers: string[] = [];
  data.forEach((product: Product, i: number) => {
    if (i >= 0 && i < 200) {
      for (let j = 1; j <= 150; ++j) {
        weightedCustomers.push(product.id);
      }
    } else if (i >= 200 && i < 800) {
      for (let j = 1; j <= 30; ++j) {
        weightedCustomers.push(product.id);
      }
    } else {
      for (let j = 1; j <= 5; ++j) {
        weightedCustomers.push(product.id);
      }
    }
  });
  return weightedCustomers;
}

export default generateWeightedCustomers;
