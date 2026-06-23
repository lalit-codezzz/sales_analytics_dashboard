import axios from "axios";
import { Product } from "../../src/types/Product";

async function generateWeightedProducts() {
  const response = await axios.get("/data/products.json");

  const { data } = response;
  const weightedProducts: string[] = [];
  data.forEach((product: Product, i: number) => {
    if (i >= 0 && i < 50) {
      for (let j = 1; j <= 120; ++j) {
        weightedProducts.push(product.id);
      }
    } else if (i >= 50 && i < 150) {
      for (let j = 1; j <= 30; ++j) {
        weightedProducts.push(product.id);
      }
    } else {
      for (let j = 1; j <= 5; ++j) {
        weightedProducts.push(product.id);
      }
    }
  });
  return weightedProducts;
}

export default generateWeightedProducts;
