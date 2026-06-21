export type ProductCategories =
  | "Electronics"     // done
  | "Fashion"         // done
  | "Home & Kitchen"    // done
  | "Books"       // done
  | "Sports"      // done
  | "Beauty"      // done
  | "Grocery"     // done
  | "Vehicle";   // done

export interface Product {
  id: string;
  name: string;
  category: ProductCategories;
  description: string;
  basePrice: number;
  popularity: number;
}
