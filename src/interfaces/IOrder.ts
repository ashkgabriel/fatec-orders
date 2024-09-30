export interface IOrder {
  id: number;
  date: string;
  client_id: number;
  payment_method: string;
  quantity: number;
  total: number;
}
