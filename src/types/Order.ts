export type OrderStatus = "Delivered" | "Pending" | "Cancelled" | "Returned";

export interface Order {
  id: string;
  customerId: string;
  productId: string;
  status: OrderStatus;
  amount: number; // not rupees, but paisa 1 INR = 100 Paise (Good for decimals - will support till 2 digits after decimal)
  date: Date;
  quantity: 1;
}
