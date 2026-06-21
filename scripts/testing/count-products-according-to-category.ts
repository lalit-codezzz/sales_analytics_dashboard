import axios from "axios";
import { Product, ProductCategories } from "../../src/types/Product";
import * as fs from "fs";

export async function fetchProducts() {
  const response = await axios.get("/data/products.json");
  const products: Product[] = response.data;

  const productsCountMapGroupedByCategory: Record<ProductCategories, number> =
    {} as Record<ProductCategories, number>;

  products.forEach((product: Product) => {
    let actor = productsCountMapGroupedByCategory[product.category];

    if (!actor) {
      productsCountMapGroupedByCategory[product.category] = 1;
    } else {
      productsCountMapGroupedByCategory[product.category]++;
    }
  });

  fs.writeFileSync(
    `/data/productsCount.json`,
    JSON.stringify(productsCountMapGroupedByCategory),
  );

  return productsCountMapGroupedByCategory;
}

fetchProducts();
