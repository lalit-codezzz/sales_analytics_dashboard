import axios from "axios";
import * as fs from "fs";

import { Product, ProductCategories } from "../../src/types/Product";

async function generateProducts() {
  const products: Product[] = [];

  // Fetching products from dummyjson API - Random products excluding books
  const dummyjsonResponse = await axios.get(
    "https://dummyjson.com/products?limit=194",
  );
  const productsFromDummyJsonAPI = dummyjsonResponse.data.products;
  productsFromDummyJsonAPI.forEach((p: any) => {
    let productCategory: Partial<ProductCategories> = "Beauty";

    if (
      p.category === "beauty" ||
      p.category === "fragrances" ||
      p.category === "skin-care"
    ) {
      productCategory = "Beauty";
    } else if (
      p.category === "furniture" ||
      p.category === "home-decoration" ||
      p.category === "kitchen-accessories"
    ) {
      productCategory = "Home & Kitchen";
    } else if (p.category === "groceries") {
      productCategory = "Grocery";
    } else if (
      p.category === "laptops" ||
      p.category === "mens-watches" ||
      p.category === "mobile-accessories" ||
      p.category === "smartphones" ||
      p.category === "tablets" ||
      p.category === "womens-watches"
    ) {
      productCategory = "Electronics";
    } else if (
      p.category === "mens-shirts" ||
      p.category === "mens-shoes" ||
      p.category === "sunglasses" ||
      p.category === "tops" ||
      p.category === "womens-bags" ||
      p.category === "womens-dresses" ||
      p.category === "womens-jewellery" ||
      p.category === "womens-shoes"
    ) {
      productCategory = "Fashion";
    } else if (p.category === "motorcycle" || p.category === "vehicle") {
      productCategory = "Vehicle";
    } else if (p.category === "sports-accessories") {
      productCategory = "Sports";
    } else {
      throw new Error("Unknown category: <p.category> - " + p.category);
    }
    let price = p?.price * 95;

    price = Math.ceil(price);

    products.push({
      id: crypto.randomUUID(),
      name: p.title,
      category: productCategory,
      description: p.description,
      basePrice: price * 100,
      imageUrl: p.images[0],
    });
  });

  // fetching books separately from api.freeapi.app [count - 56] to have total 250 products
  const freeapiResponse = await axios.get(
    "https://api.freeapi.app/api/v1/public/books?limit=56",
  );
  const booksFromFreeapi = freeapiResponse.data.data.data;
  booksFromFreeapi.forEach((b: any) => {
    let price = b?.saleInfo?.listPrice?.amount || Math.ceil(Math.random() * 1000);
    price = Math.ceil(price);
    products.push({
      id: crypto.randomUUID(),
      name: b.volumeInfo.title,
      category: "Books",
      description: b.volumeInfo.description,
      basePrice: price * 100,
      imageUrl: b.volumeInfo.imageLinks.thumbnail
    });
  });
  return products;
}


generateProducts().then((products) => {
  fs.writeFileSync(
    `${process.cwd()}/public/data/products.json`,
    JSON.stringify(products),
  );
});
